import {useAppDispatch, useAppSelector} from '@application/hooks'
import {updateFavourite} from '@infrastructure/favourite'
import type {RootState} from '@application/types'
import type {Joke} from '@infrastructure/types'

export const useFavouriteJoke = (joke: Joke) => {
  const dispatch = useAppDispatch()

  const isFavourite = useAppSelector((state: RootState) => {
    const favs = state.favourites.favourites || []
    return joke && favs.findIndex(j => j.id === joke.id) !== -1
  })

  const setFavourite = () => dispatch(updateFavourite(joke))

  return [isFavourite, setFavourite]
}
