import React from 'react'
import {Box, Text, Flex, IconButton} from 'native-base'
import type {Joke} from '@types'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useAppDispatch, removeFavourite} from '@store'

interface Props {
  item: Joke
}

export const FavouriteJoke = (props: Props) => {
  const dispatch = useAppDispatch()

  console.log(props.item)

  return (
    <Box bg="muted.200" mx="4" my="2" borderRadius="10">
      <Flex direction="row" my="4" mx="2" justifyContent="space-between">
        <Text fontSize="lg" flex={1} p="2" flexWrap="wrap">
          {props.item.joke}
        </Text>
        <IconButton
          onPress={() => dispatch(removeFavourite(props.item.id))}
          _icon={{as: FontAwesome, name: 'minus-circle', color: 'danger.400'}}
          size="md"
        />
      </Flex>
    </Box>
  )
}
