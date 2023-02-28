import React, { memo, FC, forwardRef } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

type TContextMenu = {
  open: boolean
  setIsShow: (value: boolean) => void
  position: {
    top: number
    left: number
  }
}

const ContextMenu: FC<any> = forwardRef(
  (props, ref: React.RefObject<HTMLDivElement>) => {
    const { open, setIsShow, position } = props as TContextMenu
    return (
      <div
        style={position}
        className={cn(styles.contextMenu, {
          [styles.open]: open,
        })}
        ref={ref}
      >
        <div className="menuElement">Refactor</div>
        <div className="menuElement">Cut</div>
        <div className="menuElement">Copy</div>
        <div className="menuElement">Paste</div>
      </div>
    )
  }
)

export default memo(ContextMenu)
