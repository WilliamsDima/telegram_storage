import cn from 'classnames'
import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'

type TButton = {
  children: React.ReactNode
  overStyles?: CSSProperties
  pulseAnim?: boolean
  shadowClick?: boolean
  onClick?: () => void
}

const Button: FC<TButton> = memo(
  ({ children, overStyles, pulseAnim, onClick, shadowClick = true }) => {
    return (
      <button
        onClick={onClick}
        style={overStyles}
        className={cn(styles.btn, {
          [styles.pulse]: pulseAnim,
          [styles.shadowClick]: shadowClick,
        })}
      >
        {children}
      </button>
    )
  }
)

export default Button
