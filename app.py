import gradio as gr
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, r2_score
import io

# ────────────────────────────────────────────────
# Main ML function
# ────────────────────────────────────────────────
def build_and_predict(file):
    if file is None:
        return "Please upload a CSV file first", "", ""

    try:
        # Read uploaded file correctly (Gradio way)
        df = pd.read_csv(file)

        # Clean salary column
        if 'Salary' not in df.columns:
            return "No 'Salary' column found — cannot train or predict", "", ""

        df['Salary'] = pd.to_numeric(
            df['Salary'].replace({'\$': '', ',': ''}, regex=True),
            errors='coerce'
        )
        df = df.dropna(subset=['Salary'])

        if len(df) < 20:
            return f"Too few valid rows with Salary data ({len(df)} rows)", "", ""

        # ─── Feature engineering ───
        numeric_features = ['Age']

        # Height → inches
        if 'Height' in df.columns:
            def height_to_inches(h):
                if isinstance(h, str) and '-' in str(h):
                    try:
                        ft, inc = map(int, str(h).split('-'))
                        return ft * 12 + inc
                    except:
                        return np.nan
                try:
                    return float(h)
                except:
                    return np.nan

            df['Height_inches'] = df['Height'].apply(height_to_inches)
            numeric_features.append('Height_inches')

        if 'Weight' in df.columns:
            numeric_features.append('Weight')

        categorical_features = []
        if 'Position' in df.columns: categorical_features.append('Position')
        if 'Team' in df.columns:     categorical_features.append('Team')
        if 'College' in df.columns:  categorical_features.append('College')

        if not (numeric_features or categorical_features):
            return "No usable features found (need at least Age, Position, Team or College)", "", ""

        X = df[numeric_features + categorical_features].copy()
        y = np.log1p(df['Salary'])  # log(1 + salary) — crucial for skewed salaries

        # ─── Preprocessing + Model Pipeline ───
        preprocessor = ColumnTransformer(
            transformers=[
                ('num', StandardScaler(), numeric_features),
                ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), categorical_features)
            ],
            remainder='drop'
        )

        model = Pipeline(steps=[
            ('preprocessor', preprocessor),
            ('regressor', RandomForestRegressor(
                n_estimators=200,
                random_state=42,
                n_jobs=-1,
                max_depth=12,
                min_samples_leaf=3
            ))
        ])

        # Train / Test split
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.25, random_state=42
        )

        model.fit(X_train, y_train)

        # Predict & evaluate (in log space)
        y_pred_log = model.predict(X_test)
        y_test_orig = np.expm1(y_test)
        y_pred_orig = np.expm1(y_pred_log)

        mae = mean_absolute_error(y_test_orig, y_pred_orig)
        r2 = r2_score(y_test_orig, y_pred_orig)

        # Feature importance
        feature_names = (
            numeric_features +
            list(model.named_steps['preprocessor']
                 .named_transformers_['cat']
                 .get_feature_names_out(categorical_features))
        )
        importances = model.named_steps['regressor'].feature_importances_
        imp_df = pd.DataFrame({'Feature': feature_names, 'Importance': importances})
        imp_df = imp_df.sort_values('Importance', ascending=False).head(12).round(4)

        # Predict on full dataset
        df['Predicted_Salary_log'] = model.predict(X)
        df['Predicted_Salary'] = np.expm1(df['Predicted_Salary_log'])
        df_display = df.copy()
        df_display['Salary'] = df_display['Salary'].apply(lambda x: f"${x:,.0f}")
        df_display['Predicted_Salary'] = df_display['Predicted_Salary'].apply(lambda x: f"${x:,.0f}")

        sample_preds = df_display[['Name', 'Position', 'Age', 'Salary', 'Predicted_Salary']].head(12).to_markdown(index=False)

        result = f"""
**Model trained successfully** (Random Forest Regressor + log salary)

- Valid rows used: {len(df)}
- Features used: {', '.join(numeric_features + categorical_features)}
- Test MAE: ${mae:,.0f} (average absolute error in USD)
- Test R² score: {r2:.3f} (higher is better; negative = worse than mean prediction)

**Top 12 feature importances:**
{imp_df.to_markdown(index=False)}

**Sample predictions (first 12 players):**
{sample_preds}

Note: Current R² is limited because the dataset only has basic info (age, position, team, college, height/weight).  
Adding performance stats (PPG, RPG, APG, PER, minutes, etc.) would usually raise R² to 0.6–0.85.
"""

        preview = df_display.head(10)[['Name', 'Team', 'Position', 'Age', 'Salary', 'Predicted_Salary']].to_markdown(index=False)

        return result, preview, ""

    except Exception as e:
        import traceback
        return f"**Error during processing**:\n{str(e)}\n\n{traceback.format_exc()[:1200]}", "", ""

# ────────────────────────────────────────────────
# Gradio Interface
# ────────────────────────────────────────────────
with gr.Blocks(theme=gr.themes.Soft(primary_hue="indigo")) as demo:
    gr.Markdown("# NBA Salary Predictor – Hackathon 2026")
    gr.Markdown("""
    Upload your NBA players CSV file  
    → Trains a real Random Forest model to predict player salaries  
    → Shows predictions, error metrics, and which features matter most
    """)

    file_input = gr.File(label="Upload NBA CSV (.csv)", file_types=[".csv"])

    predict_button = gr.Button("Train Model & Predict Salaries", variant="primary")

    result_md = gr.Markdown(label="Model Results & Analysis")
    preview_md = gr.Markdown(label="Data Preview with Predictions (first 10 rows)")

    predict_button.click(
        fn=build_and_predict,
        inputs=file_input,
        outputs=[result_md, preview_md]
    )

if __name__ == "__main__":
    demo.launch(share=True)