import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Provider as ReduxProvider} from 'react-redux'
import {NativeBaseProvider} from 'native-base'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from '@store'
import {RandomJokeTabs} from './RandomJokeTabs'

export const App = (): JSX.Element => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <RandomJokeTabs />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
