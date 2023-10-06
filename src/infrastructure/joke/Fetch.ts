import type {Joke} from '@domain/types'
import type {JokeResponse} from '@infrastructure/types'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {jokeFromResponse} from '@infrastructure/joke'

export const jokeApi = createApi({
  reducerPath: 'jokeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://icanhazdadjoke.com',
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json')
    },
  }),
  endpoints: builder => ({
    getRandomJoke: builder.query<Joke, void>({
      query: () => '/',
      transformResponse: (data: JokeResponse): Joke => jokeFromResponse(data),
    }),
  }),
})
