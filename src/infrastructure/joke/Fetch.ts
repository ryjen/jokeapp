import type {Joke as JokeResponse} from '@domain/types'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const jokeApi = createApi({
  reducerPath: 'jokeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://icanhazdadjoke.com',
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json')
    },
  }),
  endpoints: builder => ({
    getRandomJoke: builder.query<JokeResponse, void>({
      query: () => '/',
    }),
  }),
})
