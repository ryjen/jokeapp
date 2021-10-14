import React, {
  useState,
  useEffect,
} from 'react';
import {
  Center,
} from 'native-base'
import AppLayout from '../components'

const RandomJoke = () => {
  const [isLoading, setLoading] = useState(true)
  const [joke, setJoke] = useState("")

  const getRandomJoke = async () => {
    try {
      const resp = await fetch('https://icanhazdadjoke.com', {
        headers: {
          'Accept': 'application/json'
        }
      })
      const json = await resp.json()
      setJoke(json.joke)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => getRandomJoke(), [])

  return (
    <AppLayout>
      <Center style={{ padding: 24 }}>
        {isLoading ? <ActivityIndicator /> : (
          <Text>{joke}</Text>
        )}
      </Center>
    </AppLayout>
  )
}

export default RandomJoke
