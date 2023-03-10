import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { BiRename } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

import { useDisk } from '../../../context/diskContext'
import { useActions } from '../../../hooks/useActions'

type TFolderMenu = {
  closeHandler: () => void
}

const FolderMenu: FC<TFolderMenu> = ({ closeHandler }) => {
  const { setIsShowModalCreater, isFolderContext, setIsShowContextMenu } =
    useDisk()
  const { deleteFolder } = useActions()

  const handlerRename = () => {
    setIsShowModalCreater(true)
    setIsShowContextMenu(false)
    // closeHandler()
  }

  const deleteHandler = () => {
    isFolderContext && deleteFolder(isFolderContext.id)
    closeHandler()
  }

  return (
    <>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={handlerRename}>
          <BiRename fontSize={24} />
          Переименовать
        </Button>
      </li>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={deleteHandler}>
          <AiFillDelete className={styles.iconDelete} fontSize={24} />
          Удалить
        </Button>
      </li>
    </>
  )
}

export default memo(FolderMenu)
