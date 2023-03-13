import React, { memo, forwardRef } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useDisk } from '../../../context/diskContext'
import DiskMenu from '../../molecules/DiskMenu'
import FolderMenu from '../../molecules/FolderMenu'

type TContextMenu = {
  open: boolean
  setIsShow: (value: boolean) => void
  position: {
    top: number
    left: number
  }
}

const ContextMenu = forwardRef<HTMLDivElement, TContextMenu>((props, ref) => {
  const { open, setIsShow, position } = props
  const { isFolderContext, setIsFolderContext } = useDisk()

  const closeHandler = () => {
    setIsFolderContext(null)
    setIsShow(false)
  }

  return (
    <div
      style={position}
      className={cn(styles.contextMenu, {
        [styles.open]: open,
      })}
      ref={ref}
    >
      <ul className={styles.menu}>
        {!!isFolderContext ? (
          <FolderMenu closeHandler={closeHandler} />
        ) : (
          <DiskMenu closeHandler={closeHandler} />
        )}
      </ul>
    </div>
  )
})

export default memo(ContextMenu)
