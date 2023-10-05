import type {RootState} from '@application/types'
import type {JokeProps as Props} from '@presentation/types'
import React, {useCallback} from 'react'
import {IconButton} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useAppTheme} from '@presentation/hooks'
import {useAppDispatch, useAppSelector} from '@application/hooks'
import {updateFavourite} from '@infrastructure/hooks'

export const AddRemoveFavourite = ({joke}: Props) => {
  const {icons} = useAppTheme()
  const dispatch = useAppDispatch()

  const isFavourite = useAppSelector((state: RootState) => {
    const favs = state.favourites.favourites || []
    return joke && favs.findIndex(j => j.id === joke.id) !== -1
  })

  const setFavourite = useCallback(
    () => dispatch(updateFavourite(joke)),
    [dispatch, joke],
  )

  return (
    <IconButton
      onPress={() => setFavourite()}
      _icon={{
        as: FontAwesome,
        name: isFavourite ? 'minus-circle' : 'plus-circle',
        color: icons.actions,
      }}
      size="md"
    />
  )
}
