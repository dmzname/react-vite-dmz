import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/*if (localStorage.getItem('i18nextLng') === null) {
    localStorage.setItem('i18nextLng', 'ua');
}*/

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ua',
        debug: import.meta.env.DEV,
    });

export default i18n;
