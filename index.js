/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {App} from '@app'
import {name as appName} from './app.json'
import './src/domain/i18n'

AppRegistry.registerComponent(appName, () => App)
