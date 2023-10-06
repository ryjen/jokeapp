import type {RootState} from '@application/types'
import type {RandomJokeNavParams} from '@presentation/types'
import React from 'react'
import {
  RefreshIcon,
  FavouritesIcon,
  RandomJokeMenu,
} from '@presentation/components'
import {FavouriteJokesScreen, RandomJokeScreen} from '@presentation/screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useAppSelector} from '@application/hooks'
import {useAppTheme} from '@presentation/hooks'
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
          tabBarLabel: t('Refresh'),
          headerTitle: t('Jiver - Random'),
          headerRight: RandomJokeMenu,
          tabBarIcon: RefreshIcon,
        }}
      />
      <Tab.Screen
        name="FavsTab"
        component={FavouriteJokesScreen}
        options={{
          tabBarLabel: t('Favourites'),
          headerTitle: t('Jiver - Favourites'),
          tabBarIcon: FavouritesIcon,
          tabBarBadge: numOfFavs,
        }}
      />
    </Tab.Navigator>
  )
}
