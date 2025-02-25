import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from '../../src/locales/de/common.json';

i18n.use(initReactI18next).init({
  lng: 'de',
  fallbackLng: 'de',

  // debug: true,

  interpolation: {
    escapeValue: false,
  },

  resources: { de: { translation: { ...de } } },
});

export default i18n;
