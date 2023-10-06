import type {RootState} from '@application/types'
import type {JokeState} from '@infrastructure/types'
import type {Joke} from '@domain/types'
import {createSelector} from '@reduxjs/toolkit'

export const selectRandomJoke = createSelector(
  (state: RootState): JokeState => state.random,
  (state: JokeState): Joke | undefined => state.joke,
)
