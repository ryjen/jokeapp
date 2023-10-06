import {createContainer, asClass, asValue} from 'awilix'
import {JokeRepository, jokeApi} from '@infrastructure/joke'

export const container = createContainer()

container.register({
  jokeRepository: asClass(JokeRepository).scoped(),
  jokeApi: asValue(jokeApi),
})
