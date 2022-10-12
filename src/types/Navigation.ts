import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native'

type StackParamList = {
  Random: undefined
  Favourites: undefined
}

export type TabParamList = {
  Home: NavigatorScreenParams<StackParamList>
  RandomTab: undefined
  FavsTab: undefined
}

type AppNavProps = NativeStackScreenProps<StackParamList>

type RandomJokeProps = BottomTabScreenProps<TabParamList, 'RandomTab'>
type FavouritesProps = BottomTabScreenProps<TabParamList, 'FavsTab'>

export type RandomJokeScreenProps = CompositeScreenProps<
  RandomJokeProps,
  AppNavProps
>
