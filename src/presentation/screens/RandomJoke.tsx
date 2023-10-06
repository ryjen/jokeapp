import type {RandomJokeScreenProps} from '@presentation/types'
import React, {useEffect} from 'react'
import {Center, Text, VStack, Spinner, ScrollView} from 'native-base'
import {useTranslation} from 'react-i18next'
import {AppLayout} from '@presentation/components'
import {DI} from '@application/store'

const jokeRepository = DI.resolve('jokeRepository')

export const RandomJoke = ({navigation}: RandomJokeScreenProps) => {
  const {t} = useTranslation()
  const {data, isError, isLoading, refetch} = jokeRepository
    .getRandomJoke()
    .useQuery()

  useEffect(
    () =>
      navigation.addListener('tabPress', () => {
        refetch()
      }),
    [navigation, refetch],
  )

  return (
    <AppLayout>
      <Center flex={1}>
        {isLoading ? (
          <VStack>
            <Spinner />
          </VStack>
        ) : isError ? (
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
