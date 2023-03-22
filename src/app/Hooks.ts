import {useColorModeValue, useTheme} from 'native-base'
import {useAppDispatch, useAppSelector, updateFavourite} from '@store'
import type {RootState} from '@store'
import type {Joke} from '@types'

export const useAppTheme = () => {
  const {colors} = useTheme()
  return {
    appBar: {
      bg: useColorModeValue(colors.blueGray['200'], colors.blueGray['700']),
      fg: useColorModeValue(colors.light['800'], colors.light['100']),
    },
    icons: {
      actions: useColorModeValue(colors.emerald['700'], colors.emerald['100']),
    },
  }
}

export const useFavouriteJoke = (joke: Joke) => {
  const dispatch = useAppDispatch()

  const isFavourite = useAppSelector((state: RootState) => {
    const favs = state.favourites.favourites || []
    return joke && favs.findIndex(j => j.id === joke.id) !== -1
  })

  const setFavourite = () => dispatch(updateFavourite(joke))

  return [isFavourite, setFavourite]
}
