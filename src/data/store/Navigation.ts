import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Renderer = () => React.ReactNode

export type State = {
  menu?: Renderer
  title?: string
}

const initialState: State = {}

const slice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updateMenu: (state, action: PayloadAction<Renderer>) => {
      state.menu = action.payload
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const reducer = slice.reducer

export const {updateMenu, updateTitle} = slice.actions
