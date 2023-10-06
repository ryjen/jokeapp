import {jokeApi as Api} from '@infrastructure/joke'

export class JokeRepository {
  api: typeof Api

  constructor({jokeApi}: {jokeApi: typeof Api}) {
    this.api = jokeApi
  }

  getRandomJoke = () => this.api.endpoints.getRandomJoke
}
