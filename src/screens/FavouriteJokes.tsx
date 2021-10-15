import React, { useState, useEffect } from 'react';
import { FlatList } from 'native-base'
import { AppLayout, JokeItem } from '../components'
import { useAppSelector, RootState } from '../store'

export const FavouriteJokes = () => {
  const favourites = useAppSelector((state: RootState) => state.favourites.favourites)

  return (
    <AppLayout>
      <FlatList
        data={favourites}
        renderItem={row => <JokeItem item={row.item} />}
        keyExtractor={item => item.id}
      />
    </AppLayout>
  )
}
