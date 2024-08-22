// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to React"
    }
  },
  zh: {
    translation: {
      "welcome": "欢迎使用 React"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认语言
    interpolation: {
      escapeValue: false // 不转义值
    }
  });

export default i18n;