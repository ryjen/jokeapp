import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const jokeApi = createApi({
  reducerPath: 'jokeApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://icanhazdadjoke.com'}),
  endpoints: builder => ({
    getRandomJoke: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})
