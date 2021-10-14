import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RandomJokeScreen, FavouriteJokesScreen } from './src/screens'

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={RandomJokeScreen}
        />
        <Stack.Screen
          name="Favourites"
          component={FavouriteJokesScreen}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  </NavigationContainer>
);

export default App;
