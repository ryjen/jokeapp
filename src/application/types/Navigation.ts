import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'

export interface TabParamList {
  RandomTab: undefined
  FavsTab: undefined
}

export type RandomJokeScreenProps = BottomTabScreenProps<
  TabParamList,
  'RandomTab'
>
