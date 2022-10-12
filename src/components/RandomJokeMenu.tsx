import React from 'react'
import {HStack, IconButton} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {AddRemoveFavourite} from './AddRemoveFavourite'
import type {RootState} from '@types'
import {useAppDispatch, useAppSelector, updateFavourite} from '@store'

export const RandomJokeMenu = () => {
  const dispatch = useAppDispatch()
  const joke = useAppSelector((state: RootState) => state.joke.joke)

  if (!joke) return null

  return (
    <HStack>
      <AddRemoveFavourite joke={joke} />
      <IconButton
        onPress={() => dispatch(updateFavourite(joke))}
        _icon={{
          as: FontAwesome,
          name: 'share-alt',
          color: 'primary.600',
        }}
        size="md"
      />
    </HStack>
  )
}
