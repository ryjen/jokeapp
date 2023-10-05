import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {Joke} from '@domain/types'

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
