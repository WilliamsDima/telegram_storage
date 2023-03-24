import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string, initialValue?: any) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)

    if (jsonValue) return JSON.parse(jsonValue)

    return initialValue
  })

  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
