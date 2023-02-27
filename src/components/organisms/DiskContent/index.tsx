import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import TitleDisk from '../../atoms/TitleDisk'

type TContent = {}

const DiskContent: FC<TContent> = memo(({}) => {
  return (
    <div className={styles.diskContent}>
      <TitleDisk />
    </div>
  )
})

export default DiskContent
