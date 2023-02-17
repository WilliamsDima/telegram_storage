import cn from 'classnames'
import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'

type TButton = {
  children: React.ReactNode
  overStyles?: CSSProperties
  pulseAnim?: boolean
}

const Button: FC<TButton> = memo(({ children, overStyles, pulseAnim }) => {
  return (
    <button
      style={overStyles}
      className={cn(styles.btn, {
        [styles.pulse]: pulseAnim,
      })}
    >
      {children}
    </button>
  )
})

export default Button
