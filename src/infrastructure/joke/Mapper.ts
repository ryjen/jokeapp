import type {Joke} from '@domain/types'
import type {JokeResponse} from '@infrastructure/types'

export const jokeFromResponse = (data: JokeResponse): Joke => {
  return {id: data.id, joke: data.joke}
}
