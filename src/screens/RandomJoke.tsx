import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
  Center,
  Text,
  VStack,
  HStack,
  Spinner,
  ScrollView,
  Pressable,
  Icon,
} from 'native-base'
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome'
import { AppLayout } from '../components'
import { useAppDispatch, updateJoke } from '../store'

const text = {
  loading: 'Loading...',
  refresh: 'Refresh',
  favourites: 'Favourites',
}

export const RandomJoke = () => {
  const [isLoading, setLoading] = useState(true)
  const [joke, setJoke] = useState('')
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  const getRandomJoke = async () => {
    try {
      setLoading(true)
      const resp = await fetch('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json',
        },
      })
      const joke = await resp.json()
      setJoke(joke.joke)
      dispatch(updateJoke(joke))
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRandomJoke();
  }, [])

  return (
    <AppLayout>
      <Center flexGrow={1}>
        {isLoading ? (
          <VStack>
            <Spinner />
            <Text fontSize="md">{text.loading}</Text>
          </VStack>
        ) : (
          <ScrollView p="10">
            <Text fontSize="4xl">{joke}</Text>
          </ScrollView>
        )}
      </Center>
      <HStack justifyContent="space-evenly" shadow={6} bg="muted.200">
        <Pressable onPress={() => getRandomJoke()}>
         { ({isPressed}) => {
            return (
            <Center p="2" bg={isPressed ? "muted.300" : null}>
              <Icon as={FontAwesome} name="refresh" size="lg" color="primary.700" />
              <Text>{text.refresh}</Text>
            </Center>
          )}
         }
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Favourites')}>
         { ({isPressed}) => {
           return (
             <Center p="2" bg={isPressed ? "muted.300" : null}>
              <Icon as={FontAwesome} name="bookmark" size="lg" color="tertiary.700" />
              <Text>{text.favourites}</Text>
            </Center>
           )}
         }
        </Pressable>
      </HStack>
    </AppLayout>
  )
}
