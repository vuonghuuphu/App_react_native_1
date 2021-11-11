import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../Language/en.json';
import vi from '../Language/vie.json';

i18n.use(initReactI18next).init(
    {
        compatibilityJSON: 'v3',
        lng:'en',
        fallbackLng:'en',
        resources:{
            en : en,
            vi : vi,
        },
        interpolation:{
            escapeValue:false,
        }
    }
);
export default i18n;