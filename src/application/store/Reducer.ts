import {combineReducers} from '@reduxjs/toolkit'
import {favouriteReducer as favourites} from '@infrastructure/favourite'
import {jokeReducer as random, jokeApi} from '@infrastructure/joke'

export const rootReducer = combineReducers({
  favourites,
  random,
  [jokeApi.reducerPath]: jokeApi.reducer,
})

export const rootMiddleware = jokeApi.middleware
