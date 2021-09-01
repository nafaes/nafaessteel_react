import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./en/translation";
import { TRANSLATIONS_AR } from "./ar/translation";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar"];

i18n
  .use(initReactI18next)

  .init({
    fallbackLng,
    whitelist: availableLanguages,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ar: {
        translation: TRANSLATIONS_AR,
      },
    },

    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
