import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Provider as ReduxProvider} from 'react-redux'
import {NativeBaseProvider} from 'native-base'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from '@store'
import {
  RandomJokeNavigation as RandomJokeScreen,
  FavouriteJokesScreen,
} from '@screens'
import {RandomJokeMenu} from '@components'
import {useTranslation} from 'react-i18next'

const Stack = createNativeStackNavigator()

const AppOptions = () => {
  const {t} = useTranslation()
  return {
    headerTitleStyle: {
      fontSize: 24,
    },
    title: t('Jiver'),
  }
}

export const App = (): JSX.Element => {
  const {t} = useTranslation()
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Random"
              screenOptions={AppOptions}>
              <Stack.Screen
                name="Random"
                component={RandomJokeScreen}
                options={{
                  headerRight: RandomJokeMenu,
                  title: t('Jiver - Random Joke'),
                }}
              />
              <Stack.Screen
                name="Favourites"
                component={FavouriteJokesScreen}
                options={{
                  title: t('Jiver - Favourites'),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
