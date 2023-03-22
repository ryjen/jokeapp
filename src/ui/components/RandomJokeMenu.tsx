import React, {useCallback} from 'react'
import {HStack, IconButton, useColorMode} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5'
import {AddRemoveFavourite} from './AddRemoveFavourite'
import type {RootState} from '@store'
import {useAppDispatch, useAppSelector, updateFavourite} from '@store'

export const RandomJokeMenu = () => {
  const dispatch = useAppDispatch()
  const joke = useAppSelector((state: RootState) => state.joke?.joke)
  const {toggleColorMode} = useColorMode()

  const updateFavouriteJoke = useCallback(() => {
    if (joke) {
      dispatch(updateFavourite(joke))
    }
  }, [dispatch, joke])

  if (!joke) return null

  return (
    <HStack>
      <AddRemoveFavourite joke={joke} />
      <IconButton
        onPress={() => updateFavouriteJoke()}
        _icon={{
          as: FontAwesome,
          name: 'share-alt',
          color: 'primary.600',
        }}
        size="md"
      />
      <IconButton
        onPress={() => toggleColorMode()}
        _icon={{
          as: FontAwesome5,
          name: 'yin-yang',
          color: 'primary.600',
        }}
        size="md"
      />
    </HStack>
  )
}
