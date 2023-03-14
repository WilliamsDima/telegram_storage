import React, { memo, FC, useMemo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { AiFillFolderAdd } from 'react-icons/ai'
import { MdOutlineCloudDownload, MdOutlineContentPaste } from 'react-icons/md'
import { useDisk } from '../../../context/diskContext'
import { useActions } from '../../../hooks/useActions'
import { useAppSelector } from '../../../hooks/hooks'

type TDiskMenu = {
  closeHandler: () => void
}

const DiskMenu: FC<TDiskMenu> = ({ closeHandler }) => {
  const { setIsShowModalCreater, copyFolder, setCopyFolder } = useDisk()
  const { addFolder } = useActions()
  const { foldersPath, folders } = useAppSelector((store) => store.main)

  const handlerCreate = () => {
    setIsShowModalCreater(true)
    closeHandler()
  }

  const foldersList = useMemo(() => {
    return foldersPath.length
      ? foldersPath[foldersPath.length - 1]?.folders
      : folders
  }, [foldersPath, folders])

  const pasteHandler = () => {
    const isName = foldersList.find((f) => f.name === copyFolder.name)
    const newFolder = { ...copyFolder }
    if (isName) {
      console.log(1111)
      newFolder.id = +new Date()
      newFolder.name = newFolder.name + +new Date()
    }
    addFolder(newFolder)
    setCopyFolder(null)
    closeHandler()
  }

  return (
    <>
      <li className={styles.item}>
        <Button shadowClick={false} onClick={handlerCreate}>
          <AiFillFolderAdd fontSize={24} />
          Новая папка
        </Button>
      </li>
      {copyFolder && (
        <li className={styles.item}>
          <Button shadowClick={false} onClick={pasteHandler}>
            <MdOutlineContentPaste fontSize={24} />
            Вставить
          </Button>
        </li>
      )}

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
