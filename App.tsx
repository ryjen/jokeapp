import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Provider as ReduxProvider} from 'react-redux'
import {NativeBaseProvider} from 'native-base'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './src/store'
import {
  RandomJokeNavigation as RandomJokeScreen,
  FavouriteJokesScreen,
} from './src/screens'
import {useAppSelector, RootState} from './src/store'

const Stack = createNativeStackNavigator()

const AppOptions = () => {
  const state = useAppSelector((root: RootState) => root.navigation)

  return {
    headerTitleStyle: {
      fontSize: 24,
    },
    headerRight: state.menu,
    title: state.title ?? 'Jiver',
  }
}

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Random"
              screenOptions={AppOptions}>
              <Stack.Screen name="Random" component={RandomJokeScreen} />
              <Stack.Screen
                name="Favourites"
                component={FavouriteJokesScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
