import React, {useState, useEffect, useCallback} from 'react'
import {Center, Text, VStack, Spinner, ScrollView} from 'native-base'
import {useTranslation} from 'react-i18next'
import {AppLayout} from '@components'
import type {RandomJokeScreenProps} from '@types'
import {useRandomJoke} from '@usecases'

export const RandomJoke = ({navigation}: RandomJokeScreenProps) => {
  const {t} = useTranslation()
  const [isRefreshing, setRefreshing] = useState(false)
  const data = useRandomJoke(isRefreshing)

  const toggleRefresh = useCallback(() => {
    setRefreshing(value => !value)
  }, [])

  useEffect(
    () =>
      navigation.addListener('tabPress', () => {
        toggleRefresh()
      }),
    [navigation, toggleRefresh],
  )

  return (
    <AppLayout>
      <Center flex={1}>
        {data.isLoading ? (
          <VStack>
            <Spinner />
          </VStack>
        ) : data.isError ? (
          <VStack>
            <Text fontSize="md">{t('Could not load random joke.')}</Text>
          </VStack>
        ) : (
          <ScrollView p="10">
            <Text fontSize="4xl">{data.joke?.joke}</Text>
          </ScrollView>
        )}
      </Center>
    </AppLayout>
  )
}
