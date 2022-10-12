import React from 'react'
import {FlatList} from 'native-base'
import {AppLayout, FavouriteJoke} from '@components'
import {useAppSelector, RootState} from '@store'

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
