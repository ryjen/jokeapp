import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Joke } from '../models'

export interface State {
  joke?: Joke
}

const initialState: State = {
  joke: null,
}

export const slice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Joke>) => {
      state.joke = action.payload
    },
  },
})

export const reducer = slice.reducer

export const { update } = slice.actions
