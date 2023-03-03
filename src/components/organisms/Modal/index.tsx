import React, { memo, ReactNode, forwardRef, useEffect } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

type TModal = {
  open: boolean
  children: ReactNode
}

const Modal = forwardRef<HTMLDivElement, TModal>((props, ref) => {
  const { open, children } = props

  useEffect(() => {
    if (open) document?.body?.classList.add('modal')
    if (!open) document?.body?.classList.remove('modal')
  }, [open])
  return (
    <dialog
      className={cn(styles.modal, {
        [styles.open]: open,
      })}
    >
      <div ref={ref}>{children}</div>
    </dialog>
  )
})

export default memo(Modal)
