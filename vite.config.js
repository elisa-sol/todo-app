import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Порт, на котором будет запускаться ваше приложение
    open: true, // Открывать приложение в браузере автоматически при запуске
  },
  build: {
    outDir: 'build', // Папка, в которую будет собираться продакшн-версия
  },
  resolve: {
    alias: {
      '@': '/src', // Создает псевдоним '@' для директории 'src'
    },
  },
  css: {
    modules: {
      // Конфигурация CSS-модулей
      scopeBehaviour: 'local', // 'local' или 'global'
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Формат для имен CSS-классов
    },
  },
});
