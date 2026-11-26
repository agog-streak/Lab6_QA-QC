# Лабораторна робота №6 — E2E та Screenshot тести

## 1. Встановлення (PowerShell)

Розпакуйте архів, відкрийте папку проєкту у VS Code та виконайте:

```powershell
npm.cmd install
npx.cmd playwright install
```

## 2. Приклади методички (два браузери)

```powershell
$env:LAB_PHASE = '1'
npx.cmd playwright test local.test.js playwright.test.js
```

Очікується 12 passed. 

```powershell
npx.cmd playwright test local.test.js playwright.test.js --headed
npx.cmd playwright test local.spec.js --update-snapshots
npx.cmd playwright test local.test.js playwright.test.js local.spec.js
```

Очікується 16 passed. 

У public/index.html змініть текст h1 на «Вітаємо на локальній зміненій сторінці!», збережіть і виконайте:

```powershell
npx.cmd playwright test local.test.js playwright.test.js local.spec.js
npx.cmd playwright show-report
```

Очікується 12 passed, 4 failed. Відкрийте невдалий тест та порівняння зображен. Зупиніть сервер звіту Ctrl+C. Поверніть початковий h1.

## 3. Самостійне завдання (три браузери)

```powershell
Remove-Item Env:LAB_PHASE
npx.cmd playwright test tests/screenshots --update-snapshots
npx.cmd playwright test custom
```

Очікується 15 passed.

У public/counter.html замініть `count++;` на `count += 2;`.

```powershell
npx.cmd playwright test custom.test.js
```

Очікується 6 passed, 3 failed.Поверніть `count++;`.

Змініть CSS `#counter { font-size: 32px; }` на `#counter { font-size: 64px; color: red; }`.

```powershell
npx.cmd playwright test custom.spec.js
npx.cmd playwright show-report
```

Очікується 6 failed. Зупиніть сервер звіту Ctrl+C. Поверніть початковий CSS.

## 4. Фінальна перевірка

```powershell
npm.cmd test
```

Очікується 39 passed (13 тестів у трьох браузерах). Усі числа є очікуваними, не фактичними результатами. Сторонні сайти потребують інтернету та можуть змінюватися. Еталони PNG створюються на вашому комп'ютері; не оновлюйте їх під час перевірки навмисних дефектів. package-lock.json створиться після npm install.

HTML-звіт після будь-якого прогону: `npx.cmd playwright show-report` (Ctrl+C для виходу). 


