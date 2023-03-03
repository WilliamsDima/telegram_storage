import React, { memo, FC, useState } from 'react'
import styles from './style.module.scss'
import TitleDisk from '../../atoms/TitleDisk'
import FoldersList from '../FoldersList'
import { useAppSelector } from '../../../hooks/hooks'
import Empty from '../../atoms/Logo copy'

type TContent = {}

const DiskContent: FC<TContent> = memo(({}) => {
  const { folders } = useAppSelector((store) => store.main)

  return (
    <div className={styles.diskContent}>
      <TitleDisk />

      {folders.length ? (
        <ul className={styles.list}>
          <FoldersList folders={folders} />
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  )
})

export default DiskContent
