import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import {reducer as favourites} from './Favourites'
import {reducer as joke} from './Joke'
import {reducer as navigation} from './Navigation'

export const store = configureStore({
  reducer: {
    favourites,
    joke,
    navigation,
  },
  middleware: [thunk, logger],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
