import React, { memo, FC, forwardRef, RefObject } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { AiFillFolderAdd } from 'react-icons/ai'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { useDisk } from '../../../context/diskContext'

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
  const { setIsShowModalCreater } = useDisk()

  const handlerCreate = () => {
    setIsShowModalCreater(true)
    setIsShow(false)
  }

  const handlerItem = () => {
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
        <li className={styles.item}>
          <Button shadowClick={false} onClick={handlerCreate}>
            <AiFillFolderAdd className={styles.iconFolder} fontSize={24} />
            Новая папка
          </Button>
        </li>
        <li className={styles.item}>
          <Button shadowClick={false} onClick={handlerItem}>
            <MdOutlineCloudDownload
              className={styles.iconFolder}
              fontSize={24}
            />
            Загрузить файл
          </Button>
        </li>
      </ul>
    </div>
  )
})

export default memo(ContextMenu)
