import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Joke } from '../models'

export interface State {
  favourites: [Joke]
}

const initialState: State = {
  favourites: [],
}

const slice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Joke>) => {
      state.favourites.push(action.payload)
    },
    remove: (state, action: PayloadAction<Joke>) => {
      const i = state.favourites.findIndex(j => j.id === action.payload)
      state.favourites.splice(i,1)
    },
  },
})

export const { add, remove } = slice.actions

const persistConfig = {
  key: 'favourites',
  storage: AsyncStorage,
  whitelist: ['favourites']
}

export const reducer = persistReducer(persistConfig, slice.reducer)
