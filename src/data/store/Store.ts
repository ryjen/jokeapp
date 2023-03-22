import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import {reducer as favourites} from './Favourites'
import {reducer as joke} from './Joke'

export const store = configureStore({
  reducer: {
    favourites,
    joke,
  },
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
