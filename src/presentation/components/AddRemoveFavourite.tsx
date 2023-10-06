import type {JokeProps as Props} from '@domain/types'
import React from 'react'
import {IconButton} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useFavouriteJoke} from '@infrastructure/hooks'
import {useAppTheme} from '@presentation/hooks'

export const AddRemoveFavourite = ({joke}: Props) => {
  const {icons} = useAppTheme()

  const [isFavourite, toggleFavourite] = useFavouriteJoke(joke)

  return (
    <IconButton
      onPress={() => toggleFavourite()}
      _icon={{
        as: FontAwesome,
        name: isFavourite ? 'minus-circle' : 'plus-circle',
        color: icons.actions,
      }}
      size="md"
    />
  )
}
