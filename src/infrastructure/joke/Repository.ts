import {jokeApi as Api} from './Api'
import {container as DI} from '@application/di'

export class JokeRepository {
  api: typeof Api

  constructor({jokeApi}: {jokeApi: typeof Api}) {
    this.api = jokeApi
  }

  getRandomJoke = () => this.api.useGetRandomJokeQuery()

  hasNewJoke = () => this.api.endpoints.getRandomJoke.matchFulfilled
}

export const repository = (): JokeRepository =>
  DI.resolve<JokeRepository>('jokeRepository')
