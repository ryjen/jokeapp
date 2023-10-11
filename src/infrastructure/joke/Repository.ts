import {jokeApi as Api} from './Api'

export class JokeRepository {
  api: typeof Api

  constructor({jokeApi}: {jokeApi: typeof Api}) {
    this.api = jokeApi
  }

  getRandomJoke = () => this.api.useGetRandomJokeQuery()

  hasNewJoke = () => this.api.endpoints.getRandomJoke.matchFulfilled
}
