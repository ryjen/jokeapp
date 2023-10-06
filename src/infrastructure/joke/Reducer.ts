import type {Joke} from '@domain/types'
import type {State} from './State'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
