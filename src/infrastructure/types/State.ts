import type {Joke} from '@domain/types'

export interface JokeState {
  joke?: Joke
}

export interface FavouriteState {
  favourites: Array<Joke>
}
