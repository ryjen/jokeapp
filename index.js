import {AppRegistry} from 'react-native'
import {App} from '@presentation/App'
import {name as appName} from './app.json'
import '@domain/i18n'

AppRegistry.registerComponent(appName, () => App)
