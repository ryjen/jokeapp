import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {favouriteReducer as favourites} from '@infrastructure/favourite'
import {jokeReducer as random, jokeApi} from '@infrastructure/joke'

const rootReducer = combineReducers({
  favourites,
  random,
  [jokeApi.reducerPath]: jokeApi.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(jokeApi.middleware),
})

export const persistor = persistStore(store)
