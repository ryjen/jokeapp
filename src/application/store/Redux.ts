import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import {reducer as favourites} from '@infrastructure/favourite'
import {reducer as joke} from '@infrastructure/joke'

export const store = configureStore({
  reducer: {
    favourites,
    joke,
  },
  middleware: [thunk],
})

export const persistor = persistStore(store)
