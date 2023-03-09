import cn from 'classnames'
import React, { FC, CSSProperties, memo, ChangeEvent } from 'react'
import styles from './style.module.scss'

type TInput = {
  overStyle?: CSSProperties
  alt: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleFocus?: (event: ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
  error?: {
    message: string
  }
}

const Input: FC<TInput> = memo(
  ({ overStyle, alt, onChange, value, maxLength, handleFocus, error }) => {
    return (
      <div className={styles.inputWrapp} data-error={error?.message}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          style={overStyle}
          alt={alt}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onFocus={handleFocus}
        />
      </div>
    )
  }
)

export default Input
