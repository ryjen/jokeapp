import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as favourites } from './favourites'
import { reducer as joke } from './joke'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    favourites,
    joke,
  },
  middleware: [thunk, logger],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
