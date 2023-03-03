import React, { FC, CSSProperties, memo, ChangeEvent } from 'react'
import styles from './style.module.scss'

type TInput = {
  overStyle?: CSSProperties
  alt: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleFocus?: (event: ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
}

const Input: FC<TInput> = memo(
  ({ overStyle, alt, onChange, value, maxLength, handleFocus }) => {
    return (
      <input
        className={styles.input}
        style={overStyle}
        alt={alt}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        onFocus={handleFocus}
      />
    )
  }
)

export default Input
