import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {Joke} from '../types'

export interface State {
  joke?: Joke
}

const initialState: State = {}

const slice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Joke>) => {
      state.joke = action.payload
    },
  },
})

export const reducer = slice.reducer

export const {update} = slice.actions
