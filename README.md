# Hackathon AI Demo – 2026  
Простой мультимодальный анализатор данных с интерфейсом Gradio

A simple yet powerful Gradio-based web application that analyzes different types of data (text, images, tables) using modern pre-trained AI models.

## Что уже работает / Current Features

**Русский**  
- Анализ тональности текста (позитив / негатив / нейтраль) на основе RoBERTa  
  (модель: cardiffnlp/twitter-roberta-base-sentiment-latest)  
- Поддержка Apple Silicon (M1/M2/M3) через MPS  
- Публичная ссылка через Gradio (`share=True`) для демонстрации жюри  

**English**  
- **Text Sentiment Analysis**  
  Real-time positive / neutral / negative classification using RoBERTa-based model  
  (cardiffnlp/twitter-roberta-base-sentiment-latest)  
- **Hardware Acceleration**  
  Automatic detection and usage of Apple MPS (Metal Performance Shaders) when available, fallback to CPU  
- **Public Sharing**  
  Gradio `share=True` → instant public demo link for judges / team  
- **Clean Modular Structure**  
  Separate data processing functions ready for easy extension (tables, images, more NLP tasks)

## Планы до дедлайна / Planned Features (next steps)

**Русский**  
- Добавить классификацию изображений (Vision Transformer или EfficientNet)  
- Добавить обработку табличных данных (простая нейросеть или XGBoost / TabPFN)  
- Красивый многостраничный интерфейс с вкладками (gr.TabbedInterface)  
- Поддержка казахского / русского языков (мультиязычные модели)

**English**  
- Image classification (Vision Transformer or EfficientNet)  
- Tabular data prediction (simple neural net or gradient boosting / TabPFN)  
- Multi-tab Gradio interface (text + image + csv upload)  
- Support for Kazakh / Russian language models (multilingual sentiment)

## Запуск / Installation & Run

**Русский**  
1. Клонируйте репозиторий  
   ```bash
   git clone https://github.com/yourusername/hackathon-ai-demo.git
   cd hackathon-ai-demo