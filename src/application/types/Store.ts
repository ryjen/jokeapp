import {store} from '@application/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
