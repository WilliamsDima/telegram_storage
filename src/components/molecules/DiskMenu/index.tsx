import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { AiFillFolderAdd } from 'react-icons/ai'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { useDisk } from '../../../context/diskContext'

type TDiskMenu = {
  closeHandler: () => void
}

const DiskMenu: FC<TDiskMenu> = ({ closeHandler }) => {
  const { setIsShowModalCreater } = useDisk()

  const handlerCreate = () => {
    setIsShowModalCreater(true)
    closeHandler()
  }

  return (
    <>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={handlerCreate}>
          <AiFillFolderAdd className={styles.iconFolder} fontSize={24} />
          Новая папка
        </Button>
      </li>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={closeHandler}>
          <MdOutlineCloudDownload className={styles.iconFolder} fontSize={24} />
          Загрузить файл
        </Button>
      </li>
    </>
  )
}

export default memo(DiskMenu)
