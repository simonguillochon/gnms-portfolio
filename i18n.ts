import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      'welcome: title': 'Bienvenue sur mon portfolio !',
      'welcome: download-resume-button': 'Télécharger mon CV',
    }
  },
  en: {
    translation: {
      'welcome: title': 'Welcome on my portfolio!',
      'welcome: download-resume-button': 'Download my resume',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;