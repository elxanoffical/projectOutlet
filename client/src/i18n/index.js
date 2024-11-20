import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import az from '../locales/az.json';
import en from '../locales/en.json';
import tr from  '../locales/tr.json'

const resources = {
  az: {
    translation: az
  },
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
};

i18n
    .use(initReactI18next)
    .init({
        lng: 'az',
        resources
    })

    export default i18n