import { useIntersection } from '@hooks/useIntersection'
import React, { memo, FC, ReactNode, useEffect, CSSProperties } from 'react'
import styles from './style.module.scss'

type TSection = {
  children: ReactNode
  setVisible?: (value: boolean) => void
  overStyle?: CSSProperties
}

const Section: FC<TSection> = memo(({ children, setVisible, overStyle }) => {
  const { visible, ref } = useIntersection(true)

  useEffect(() => {
    setVisible && setVisible(visible)
  }, [visible])
  return (
    <section className={styles.section} ref={ref} style={overStyle}>
      {children}
    </section>
  )
})

export default Section
