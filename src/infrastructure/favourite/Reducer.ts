import type {State} from './State'
import type {Joke} from '@domain/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    remove: (state, action: PayloadAction<string>) => {
      const i = state.favourites.findIndex(j => j.id === action.payload)
      state.favourites.splice(i, 1)
    },
    update: (state, action: PayloadAction<Joke>) => {
      const i = state.favourites.findIndex(j => j.id === action.payload.id)
      if (i === -1) {
        state.favourites.push(action.payload)
      } else {
        state.favourites.splice(i, 1)
      }
    },
  },
})

export const {add, remove, update} = slice.actions

const persistConfig = {
  key: 'favourites',
  storage: AsyncStorage,
  whitelist: ['favourites'],
}

export const reducer = persistReducer(persistConfig, slice.reducer)
