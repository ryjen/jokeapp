import React from 'react'
import {
  useAppDispatch,
  useAppSelector,
  updateFavourite,
  RootState,
} from '../store'
import {IconButton} from 'native-base'
import type {Joke} from '../types'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'

interface Props {
  joke: Joke
}

export const AddRemoveFavourite = ({joke}: Props) => {
  const dispatch = useAppDispatch()

  const isFavourite = useAppSelector((state: RootState) => {
    const favs = state.favourites.favourites || []
    return joke && favs.findIndex(j => j.id === joke.id) !== -1
  })

  return (
    <IconButton
      onPress={() => dispatch(updateFavourite(joke))}
      _icon={{
        as: FontAwesome,
        name: isFavourite ? 'minus-circle' : 'plus-circle',
        color: 'tertiary.700',
      }}
      size="md"
    />
  )
}
