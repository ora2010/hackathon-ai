import torch
import pandas as pd
import numpy as np
from PIL import Image
import torchvision.transforms as T
from transformers import AutoTokenizer

# Определяем устройство (Мак на M1/M2/M3)
device = "mps" if torch.backends.mps.is_available() else "cpu"
print(f"🚀 ИИ запущен на: {device}")

# --- 1. ЕСЛИ ДАЛИ ТАБЛИЦУ (CSV) ---
def process_table(file_path):
    df = pd.read_csv(file_path)
    # Превращаем в тензоры PyTorch
    X = torch.tensor(df.iloc[:, :-1].values, dtype=torch.float32).to(device)
    y = torch.tensor(df.iloc[:, -1].values, dtype=torch.long).to(device)
    return X, y

# --- 2. ЕСЛИ ДАЛИ ТЕКСТ (NLP) ---
def process_text(text_list):
    # Используем токенизатор, который просил Багдат
    tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
    inputs = tokenizer(text_list, padding=True, truncation=True, return_tensors="pt")
    return inputs.to(device)

# --- 3. ЕСЛИ ДАЛИ КАРТИНКИ (CV) ---
def process_image(img_path):
    img = Image.open(img_path)
    # Используем torchvision для подготовки фото
    transform = T.Compose([
        T.Resize((224, 224)),
        T.ToTensor(),
    ])
    return transform(img).unsqueeze(0).to(device)

print("✅ Все модули (Таблицы, Текст, Фото) готовы к работе!")
import gradio as gr

# 1. Функция-мост: она берет данные из интерфейса и отправляет их в ИИ
def predict(input_data):
    # Здесь ИИ будет думать. Пока это просто заглушка (Placeholder)
    # Когда получим тему, мы вставим сюда вызов модели
    return f"ИИ получил данные и готов их обработать! (Ваш ввод: {input_data})"

# 2. Создаем сам интерфейс (наш мини-сайт)
demo = gr.Interface(
    fn=predict, 
    inputs="text",        # Тип ввода (можно поменять на 'image' или 'file' потом)
    outputs="text",       # Что ИИ вернет в ответ
    title="Мой Хакатон Проект",
    description="Загрузите данные, чтобы ИИ проанализировал их."
)

# 3. Запуск!
if __name__ == "__main__":
    # share=True создаст публичную ссылку, которую можно отправить жюри
    demo.launch(share=True)