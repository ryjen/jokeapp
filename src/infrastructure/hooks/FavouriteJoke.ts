import type {RootState} from '@application/types'
import type {Joke} from '@domain/types'
import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateFavourite, selectIsFavouriteJoke} from '@infrastructure/favourite'

export const useFavouriteJoke = (
  joke: Joke,
): [boolean, React.Dispatch<React.SetStateAction<void>>] => {
  const dispatch = useDispatch()

  const isFavourite = useSelector((state: RootState) =>
    selectIsFavouriteJoke(state, joke),
  )

  const toggleFavourite = useCallback(
    () => dispatch(updateFavourite(joke)),
    [joke, dispatch],
  )

  return [isFavourite, toggleFavourite]
}
