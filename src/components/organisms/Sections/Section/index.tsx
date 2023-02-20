import React, { memo, FC, ReactNode, useEffect, CSSProperties } from 'react'
import { useIntersection } from '../../../../hooks/useIntersection'
import styles from './style.module.scss'

type TSection = {
  children: ReactNode
  setVisible?: (value: boolean) => void
  overStyle?: CSSProperties
}

const Section: FC<TSection> = memo(({ children, setVisible, overStyle }) => {
  const { visible, ref } = useIntersection(1)

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
