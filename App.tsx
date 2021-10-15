import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import { RandomJokeScreen, FavouriteJokesScreen } from './src/screens'
import { RandomJokeActionButtons } from './src/components'

const Stack = createNativeStackNavigator()

const App = () => (
  <NativeBaseProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Random">
            <Stack.Screen
              name="Random"
              component={RandomJokeScreen}
              options={{
                title: 'Jester',
                headerRight: () => (<RandomJokeActionButtons />),
                headerTitleStyle: {
                  fontSize: 24,
                },
                headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
              }}
            />
            <Stack.Screen
              name="Favourites"
              component={FavouriteJokesScreen}
              options={{ 
                title: 'Jester - Favorites',
                headerTitleStyle: {
                  fontSize: 24,
                },
                headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  </NativeBaseProvider>
);

export default App;
