import React, { memo, FC } from 'react'
import Folder from '../../atoms/Folder'
import IconFile from '../../atoms/IconFile'
import ProgressSize from '../ProgressSize'
import styles from './style.module.scss'
import { HiFolder } from 'react-icons/hi'
import cn from 'classnames'

const dataFolders = [
  {
    id: 1,
    name: 'Бюджет 2022',
    delay: '0.6s',
  },
  {
    id: 2,
    name: 'Документы для подрядчиков',
    delay: '0.7s',
  },
  {
    id: 3,
    name: 'Видео',
    delay: '0.8s',
  },
  {
    id: 4,
    name: 'Документ',
    delay: '0.9s',
  },
  {
    id: 5,
    name: 'Портфолио',
    delay: '1s',
  },
]

const fileData = [
  {
    id: 6,
    name: 'Выручка по месяцам',
    file: 'xlsx',
    delay: '1.1s',
  },
  {
    id: 7,
    name: 'Референсы',
    file: 'zip',
    delay: '1.2s',
  },
  {
    id: 8,
    name: 'Реферат',
    file: 'doc',
    delay: '1.3s',
  },
  {
    id: 9,
    name: 'Море 2025',
    file: 'img',
    delay: '1.4s',
  },
]

type THomeFolders = {
  visible: boolean
}

const HomeFolders: FC<THomeFolders> = memo(({ visible }) => {
  return (
    <div
      className={cn(styles.folders, {
        [styles.visible]: visible,
      })}
    >
      {dataFolders.map((item) => {
        return (
          <div
            className={styles.item}
            key={item.id}
            style={{ animationDelay: item.delay }}
          >
            <div className={styles.folder}>
              <HiFolder className={styles.folderIcon} />
              <p className={styles.folderName}>{item.name}</p>
            </div>
          </div>
        )
      })}
      {fileData.map((item) => {
        return (
          <div
            className={styles.item}
            key={item.id}
            style={{ animationDelay: item.delay }}
          >
            <IconFile name={item.name} file={item.file} />
          </div>
        )
      })}
      <div className={styles.infinity}>
        <ProgressSize />
      </div>
    </div>
  )
})

export default HomeFolders
