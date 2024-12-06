# Використовуємо Node.js як базовий образ
FROM node:latest

# Створюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо package.json і встановлюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо весь проект у контейнер
COPY . .

# Відкриваємо порт для додатка
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
