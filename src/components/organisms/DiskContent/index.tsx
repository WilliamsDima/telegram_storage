import Empty from '@atoms/Logo copy'
import { useAppSelector } from '@hooks/hooks'
import TitleDisk from '@molecules/TitleDisk'
import FoldersList from '@organisms/FoldersList'
import React, { memo, FC, useMemo } from 'react'
import styles from './style.module.scss'

type TContent = {}

const DiskContent: FC<TContent> = memo(({}) => {
  const { folders, foldersPath } = useAppSelector((store) => store.main)

  const foldersList = useMemo(() => {
    return foldersPath.length
      ? foldersPath[foldersPath.length - 1]?.folders
      : folders
  }, [foldersPath, folders])

  return (
    <div className={styles.diskContent}>
      <TitleDisk />

      {foldersList.length ? (
        <ul className={styles.list}>
          <FoldersList folders={foldersList} />
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  )
})

export default DiskContent
