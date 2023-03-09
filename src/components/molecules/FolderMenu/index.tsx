import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { AiFillFolderAdd } from 'react-icons/ai'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { useDisk } from '../../../context/diskContext'

type TFolderMenu = {
  closeHandler: () => void
}

const FolderMenu: FC<TFolderMenu> = ({ closeHandler }) => {
  const { setIsShowModalCreater } = useDisk()

  const handlerRename = () => {
    setIsShowModalCreater(true)
    closeHandler()
  }

  return (
    <>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={handlerRename}>
          <AiFillFolderAdd className={styles.iconFolder} fontSize={24} />
          Переименовать
        </Button>
      </li>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={closeHandler}>
          <MdOutlineCloudDownload className={styles.iconFolder} fontSize={24} />
          Удалить
        </Button>
      </li>
    </>
  )
}

export default memo(FolderMenu)
