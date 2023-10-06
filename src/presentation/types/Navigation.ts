import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'

export type TabParamList = {
  RandomTab: undefined
  FavsTab: undefined
}

export type RandomJokeScreenProps = BottomTabScreenProps<
  TabParamList,
  'RandomTab'
>
