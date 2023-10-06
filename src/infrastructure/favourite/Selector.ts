import type {RootState} from '@application/types'
import type {FavouriteState} from '@infrastructure/types'
import type {Joke} from '@domain/types'
import {createSelector} from '@reduxjs/toolkit'

export const selectIsFavouriteJoke = createSelector(
  [
    (state: RootState) => state.favourites,
    (state: RootState, joke: Joke) => joke,
  ],
  (state: FavouriteState, joke: Joke) =>
    joke &&
    state.favourites &&
    state.favourites?.findIndex(j => j.id === joke.id) !== -1,
)

export const selectNumberOfFavourites = createSelector(
  (state: RootState) => state.favourites,
  (state: FavouriteState) => state.favourites?.length || 0,
)

export const selectFavouriteJokes = createSelector(
  (state: RootState) => state.favourites,
  (state: FavouriteState) => state.favourites || [],
)
