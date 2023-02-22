import React, { memo, FC, ReactNode } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

type TPopup = {
  open: boolean
  children: ReactNode
}

const Popup: FC<TPopup> = memo(({ open, children }) => {
  return (
    <div
      className={cn(styles.popup, {
        [styles.open]: open,
      })}
    >
      {children}
    </div>
  )
})

export default Popup
