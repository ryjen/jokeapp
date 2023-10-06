import type {Joke} from '@domain/types'
import React, {useCallback} from 'react'
import {Box, Text, Flex, IconButton} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useAppDispatch} from '@application/hooks'
import {removeFavourite} from '@infrastructure/favourite'

interface Props {
  item: Joke
}

export const FavouriteJoke = (props: Props) => {
  const dispatch = useAppDispatch()
  const onRemoveFavourite = useCallback(
    () => dispatch(removeFavourite(props.item.id)),
    [dispatch, props.item.id],
  )

  return (
    <Box bg="muted.200" mx="4" my="2" borderRadius="10">
      <Flex direction="row" my="4" mx="2" justifyContent="space-between">
        <Text fontSize="lg" flex={1} p="2" flexWrap="wrap">
          {props.item.joke}
        </Text>
        <IconButton
          onPress={() => onRemoveFavourite()}
          _icon={{as: FontAwesome, name: 'minus-circle', color: 'danger.400'}}
          size="md"
        />
      </Flex>
    </Box>
  )
}
