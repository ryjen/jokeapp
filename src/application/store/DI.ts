import {createContainer, asClass, asValue} from 'awilix'
import {JokeRepository} from '@infrastructure/joke/Repository'
import {jokeApi} from '@infrastructure/joke/Api'

export const setupContainer = () => {
  const container = createContainer()

  return container.register({
    jokeApi: asValue(jokeApi),
    jokeRepository: asClass(JokeRepository).scoped(),
  })
}
