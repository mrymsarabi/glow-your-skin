import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
            resources,
            lng: 'en', // Set the default language
            fallbackLng: 'en', // Fallback language in case a translation is missing
            interpolation: {
                escapeValue: false,
            },
    });

export default i18n;