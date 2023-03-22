import React from 'react'
import {Icon} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useAppTheme} from '@app'

type Props = {
  as: typeof FontAwesome
  name: string
}

const ActionIcon = (props: Props) => {
  const {icons} = useAppTheme()
  return <Icon {...props} color={icons.actions} />
}

export const RefreshIcon = () => <ActionIcon name="refresh" as={FontAwesome} />

export const FavouritesIcon = () => (
  <ActionIcon name="bookmark" as={FontAwesome} />
)

export const UIModeIcon = () => <ActionIcon name="yin-yang" as={FontAwesome} />
