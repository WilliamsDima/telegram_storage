import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOutside = {
  ref: any
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (
  initialIsVisible: boolean,
  callback?: () => void
): TypeOutside => {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef<HTMLElement>(null)

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
      callback && callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isShow, setIsShow }
}
