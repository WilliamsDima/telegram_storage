import React, { useState, useEffect, useRef, useCallback } from 'react'

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

export const useIntersection = (
  oneShow: boolean,
  options = DEFAULT_OPTIONS
) => {
  const ref = useRef(null)

  const [visible, setVisible] = useState(false)

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries

    if (oneShow && entry.isIntersecting) {
      setVisible(true)
      return
    }

    !oneShow && setVisible(entry.isIntersecting)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return { visible, ref }
}
