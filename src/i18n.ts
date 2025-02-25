import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de/common.json';

const resources = {
  de: {
    translation: {
      ...de,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
