import React, {useState, useEffect, useCallback} from 'react'
import {Center, Text, VStack, Spinner, ScrollView} from 'native-base'
import {useTranslation} from 'react-i18next'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  AppLayout,
  RandomJokeMenu,
  RefreshIcon,
  FavouritesIcon,
} from '@components'
import type {
  Joke,
  RandomJokeNavParams,
  RandomJokeScreenProps,
  RootState,
} from '@types'
import {useAppDispatch, updateJoke, updateNavMenu, useAppSelector} from '@store'
import {FavouriteJokesScreen} from '@screens'

export const RandomJoke = ({navigation}: RandomJokeScreenProps) => {
  const [isRefreshing, setRefreshing] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [joke, setJoke] = useState<Joke | undefined>()
  const [isError, setError] = useState(false)
  const dispatch = useAppDispatch()
  const {t} = useTranslation()

  const toggleRefresh = useCallback(() => {
    setRefreshing(value => !value)
  }, [])

  useEffect(
    () =>
      navigation.addListener('tabPress', () => {
        toggleRefresh()
      }),
    [navigation, toggleRefresh],
  )

  useEffect(() => {
    dispatch(updateNavMenu(RandomJokeMenu))
  }, [dispatch])

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        return {id: data.id, joke: data.joke}
      })
      .then((data: Joke) => {
        setJoke(data)
        dispatch(updateJoke(data))
      })
      .catch((e: Error) => {
        console.error(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch, setJoke, setLoading, setError, isRefreshing])

  return (
    <AppLayout>
      <Center flex={1}>
        {isLoading ? (
          <VStack>
            <Spinner />
          </VStack>
        ) : isError ? (
          <VStack>
            <Text fontSize="md">{t('Could not load random joke.')}</Text>
          </VStack>
        ) : (
          <ScrollView p="10">
            <Text fontSize="4xl">{joke?.joke}</Text>
          </ScrollView>
        )}
      </Center>
    </AppLayout>
  )
}

const Tab = createBottomTabNavigator<RandomJokeNavParams>()

export const RandomJokeNavigation = () => {
  const numOfFavs = useAppSelector(
    (state: RootState) => state.favourites.favourites.length,
  )
  return (
    <Tab.Navigator
      initialRouteName="RandomTab"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="RandomTab"
        component={RandomJoke}
        options={{
          tabBarLabel: 'Refresh',
          title: 'Jiver - Random',
          tabBarIcon: RefreshIcon,
        }}
      />
      <Tab.Screen
        name="FavsTab"
        component={FavouriteJokesScreen}
        options={{
          tabBarLabel: 'Favourites',
          title: 'Jiver - Favourites',
          tabBarIcon: FavouritesIcon,
          tabBarBadge: numOfFavs,
        }}
      />
    </Tab.Navigator>
  )
}
