import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'

type TButton = {
  children: React.ReactNode
  overStyles?: CSSProperties
}

const Button: FC<TButton> = memo(({ children, overStyles }) => {
  return (
    <button style={overStyles} className={styles.btn}>
      {children}
    </button>
  )
})

export default Button
