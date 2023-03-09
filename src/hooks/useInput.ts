import { useState, ChangeEvent } from 'react'

type Error = {
  message: string
}

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<Error | null>()

  const reset = () => {
    setValue(initialValue)
  }

  const bind = {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      setError(null)
    },
  }

  return { value, reset, bind, error, setError }
}
