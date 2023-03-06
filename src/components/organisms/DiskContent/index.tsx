import React, { memo, FC, useMemo } from 'react'
import styles from './style.module.scss'
import TitleDisk from '../../molecules/TitleDisk'
import FoldersList from '../FoldersList'
import { useAppSelector } from '../../../hooks/hooks'
import Empty from '../../atoms/Logo copy'
import BreadCrumbs from '../../molecules/BreadCrumbs'

type TContent = {}

const DiskContent: FC<TContent> = memo(({}) => {
  const { folders, folderSelect } = useAppSelector((store) => store.main)

  const foldersList = useMemo(() => {
    return folderSelect.length
      ? folderSelect[folderSelect.length - 1]?.folders
      : folders
  }, [folderSelect])

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
