import type {JokeProps as Props} from '@domain/types'
import React from 'react'
import {Share, Alert} from 'react-native'
import {IconButton} from 'native-base'
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome'
import {useAppTheme} from '@presentation/hooks'
import {useTranslation} from 'react-i18next'

export const ShareJoke = ({joke}: Props) => {
  const {icons} = useAppTheme()
  const {t} = useTranslation()

  const onShare = async () => {
    try {
      await Share.share({
        message: joke.joke,
      })
    } catch (error: unknown) {
      Alert.alert(t('Unable to share joke'))
    }
  }

  return (
    <IconButton
      onPress={() => onShare()}
      _icon={{
        as: FontAwesome,
        name: 'share-alt',
        color: icons.actions,
      }}
      size="md"
    />
  )
}
