import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { BiRename } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { IoCopy } from 'react-icons/io5'
import { useDisk } from '@context/diskContext'
import { useActions } from '@hooks/useActions'
import { IMessage } from '@stores/redusers/main/types'
import Button from '@storybook/atoms/Button'

type TFolderMenu = {
  closeHandler: () => void
}

const FolderMenu: FC<TFolderMenu> = ({ closeHandler }) => {
  const {
    setIsShowModalCreater,
    isFolderContext,
    setIsShowContextMenu,
    setCopyFolder,
  } = useDisk()
  const { deleteFolder, setMessage, setTooltip } = useActions()

  const handlerRename = () => {
    setIsShowModalCreater(true)
    setIsShowContextMenu(false)
    // closeHandler()
  }

  const copyHandler = () => {
    setCopyFolder(isFolderContext)
    setIsShowContextMenu(false)
    // closeHandler()
  }

  const deleteHandler = () => {
    const message: IMessage = {
      text: `Вы действительно хоите удалить папку "${isFolderContext?.name}"?`,
      callback: () => {
        isFolderContext && deleteFolder(isFolderContext.id)
        closeHandler()
        setTooltip({
          text: 'Папка удалена',
        })
      },
    }
    setMessage(message)
  }

  return (
    <>
      <li className={styles.item}>
        {/* <Button shadowClick={false} onClick={copyHandler}>
          <IoCopy fontSize={24} />
          Копировать
        </Button> */}
      </li>
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
