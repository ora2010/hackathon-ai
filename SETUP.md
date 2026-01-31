# Орнату нұсқаулары / Installation Instructions

## 1. Node.js және npm нұсқасын тексеру

Терминалда (PowerShell немесе Command Prompt) мына командаларды орындаңыз:

```bash
node --version
npm --version
```

Егер Node.js орнатылмаған болса, [nodejs.org](https://nodejs.org/) сайтынан жүктеп алыңыз.

## 2. Жоба қалтасына өту

```bash
cd "c:\Users\Lenovo\Desktop\Учеба\Проект\career-platform"
```

## 3. Қажетті кітапханаларды орнату

Мына командаларды біртіндеп орындаңыз:

```bash
npm install lucide-react
npm install framer-motion
npm install axios
npm install react-markdown
```

Немесе барлығын бір командада:

```bash
npm install lucide-react framer-motion axios react-markdown
```

## 4. Даму серверін іске қосу

```bash
npm run dev
```

Браузерде ашыңыз: `http://localhost:3000`

## Орнатылған компоненттер

### ChatInterface
- Файл: `src/components/ChatInterface.tsx`
- Функционал: AI чат интерфейсі, сурет жүктеу, хабарламалар көрсету
- Тіл: Қазақша

### UniversityResults
- Файл: `src/components/UniversityResults.tsx`
- Функционал: Университеттер тізімін анимациямен көрсету
- Ерекшеліктер: Сәйкестік проценті, бағдарламалар, рейтинг

## Түстер конфигурациясы

`src/app/globals.css` файлында:
- Primary (негізгі): `#0047AB` (көк)
- Secondary (қосымша): `#FFFFFF` (ақ)

## Келесі қадамлар

1. ✅ Жоба құрылымы дайын
2. ✅ Компоненттер жасалды
3. ✅ Түстер бапталды
4. ⏳ Кітапханаларды орнату керек (npm install)
5. ⏳ AI API интеграциясы (кейінірек)
6. ⏳ Сурет талдау функционалы (кейінірек)

## Проблемалар туындаса

Егер `npm` командасы табылмаса:
1. Node.js дұрыс орнатылғанын тексеріңіз
2. Терминалды қайта ашыңыз
3. PATH айнымалысында Node.js бар екенін тексеріңіз
