import React from 'react'
import { HStack, IconButton } from 'native-base'
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome'
import { AddRemoveFavourite } from './AddRemoveFavourite'

export const RandomJokeActionButtons = () => {
  return (
    <HStack>
      <AddRemoveFavourite />
      <IconButton onPress={() => {}} _icon={{ 
        as: FontAwesome, 
        name: "share-alt",
        color: "primary.600"
      }} size="md" />
    </HStack>
  )
}
