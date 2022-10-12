import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Loading...': 'Loading...',
      'Refreshing...': 'Refreshing...',
      Refresh: 'Refresh',
      Favourites: 'Favourites',
      'Could not load random joke.': 'Could not load random joke.',
    },
  },
  fr: {
    translation: {
      'Loading...': 'Chargement...',
      'Refreshing...': 'Rafraîchissant...',
      Refresh: 'Rafraîchir',
      Favourites: 'Favoris',
      'Could not load random joke.':
        'Impossible de charger la blague aléatoire.',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
