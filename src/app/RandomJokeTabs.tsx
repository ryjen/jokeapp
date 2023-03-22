import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RefreshIcon, FavouritesIcon} from '@components'
import type {RandomJokeNavParams, RootState} from '@types'
import {useAppSelector} from '@store'
import {FavouriteJokesScreen, RandomJokeScreen} from '@screens'
import {useAppTheme} from './Hooks'
import {RandomJokeMenu} from './RandomJokeMenu'
import {useTranslation} from 'react-i18next'

const Tab = createBottomTabNavigator<RandomJokeNavParams>()

export const RandomJokeTabs = () => {
  const {t} = useTranslation()
  const numOfFavs = useAppSelector(
    (state: RootState) => state.favourites.favourites.length,
  )
  const {appBar} = useAppTheme()

  return (
    <Tab.Navigator
      initialRouteName="RandomTab"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: appBar.bg,
        },
        tabBarLabelStyle: {
          color: appBar.fg,
        },
        headerStyle: {
          backgroundColor: appBar.bg,
        },
        headerTitleStyle: {
          color: appBar.fg,
        },
      }}>
      <Tab.Screen
        name="RandomTab"
        component={RandomJokeScreen}
        options={{
          tabBarLabel: () => t('Refresh'),
          headerTitle: () => t('Jiver - Random'),
          headerRight: RandomJokeMenu,
          tabBarIcon: RefreshIcon,
        }}
      />
      <Tab.Screen
        name="FavsTab"
        component={FavouriteJokesScreen}
        options={{
          tabBarLabel: () => t('Favourites'),
          headerTitle: () => t('Jiver - Favourites'),
          tabBarIcon: FavouritesIcon,
          tabBarBadge: numOfFavs,
        }}
      />
    </Tab.Navigator>
  )
}
