import React from 'react'
import {HStack, IconButton, useColorMode} from 'native-base'
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5'
import {AddRemoveFavourite} from './AddRemoveFavourite'
import {ShareJoke} from './ShareJoke'
import {useAppTheme} from '@app'
import {useAppSelector} from '@store'
import type {RootState} from '@store'

const JokeMenuItems = () => {
  const joke = useAppSelector((root: RootState) => root.joke?.joke)

  if (!joke) return null

  return (
    <>
      <AddRemoveFavourite joke={joke} />
      <ShareJoke joke={joke} />
    </>
  )
}

export const RandomJokeMenu = () => {
  const {toggleColorMode} = useColorMode()
  const {icons} = useAppTheme()

  return (
    <HStack>
      <JokeMenuItems />
      <IconButton
        onPress={() => toggleColorMode()}
        _icon={{
          as: FontAwesome5,
          name: 'yin-yang',
          color: icons.actions,
        }}
        size="md"
      />
    </HStack>
  )
}
