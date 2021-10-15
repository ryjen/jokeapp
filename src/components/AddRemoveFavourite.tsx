import React from 'react'
import { useAppDispatch, useAppSelector, addFavourite, removeFavourite, RootState } from '../store'
import { IconButton } from 'native-base'
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome'

export const AddRemoveFavourite = () => {
  const joke = useAppSelector((state: RootState) => state.joke.joke)
  const dispatch = useAppDispatch()
  const isFavourite = useAppSelector( (state: RootState) => {
    const favs = state.favourites.favourites || []
    return joke && favs.findIndex(j => j.id === joke.id) !== -1
  })

  if (joke == null) {
    return null
  }

  if (isFavourite) {
    return (
      <IconButton onPress={() => dispatch(removeFavourite(joke))}
        _icon={{ 
          as: FontAwesome,
          name: "minus-circle",
          color: "tertiary.700",
        }} size="md" />
    )
  }

  return (
    <IconButton onPress={() => dispatch(addFavourite(joke))}
      _icon={{
        as: FontAwesome,
        name: "plus-circle",
        color: "tertiary.700",
      }} size="md" />
  )
}

