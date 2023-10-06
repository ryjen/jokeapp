import type {RootState} from '@application/types'
import React from 'react'
import {FlatList} from 'native-base'
import {AppLayout, FavouriteJoke} from '@presentation/components'
import {useAppSelector} from '@application/hooks'

export const FavouriteJokes = () => {
  const favourites = useAppSelector(
    (state: RootState) => state.favourites.favourites,
  )

  return (
    <AppLayout>
      <FlatList
        data={favourites}
        renderItem={row => <FavouriteJoke item={row.item} />}
        keyExtractor={item => item.id}
      />
    </AppLayout>
  )
}
