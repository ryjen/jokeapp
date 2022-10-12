import {useState, useEffect} from 'react'
import type {Joke} from '@types'
import {useAppDispatch, updateJoke} from '@store'

export const useRandomJoke = (refresh: boolean) => {
  const [data, setData] = useState<Joke | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        return {id: json.id, joke: json.joke}
      })
      .then(joke => {
        setData(joke)
        dispatch(updateJoke(joke))
      })
      .catch((e: Error) => {
        console.error(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [refresh, dispatch])

  return {joke: data, isLoading, isError}
}
