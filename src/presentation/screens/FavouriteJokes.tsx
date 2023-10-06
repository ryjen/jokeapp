import React from 'react'
import {FlatList} from 'native-base'
import {useSelector} from 'react-redux'
import {AppLayout, FavouriteJoke} from '@presentation/components'
import {selectFavouriteJokes} from '@infrastructure/favourite'

export const FavouriteJokes = () => {
  const favourites = useSelector(selectFavouriteJokes)

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
