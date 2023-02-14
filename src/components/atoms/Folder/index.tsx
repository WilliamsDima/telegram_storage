import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'

type TFolder = {
  overStyles?: CSSProperties
  colorFolder?: string
}

const Folder: FC<TFolder> = memo(({ overStyles, colorFolder }) => {
  return (
    <div
      className={styles.folder}
      style={{ ...overStyles, backgroundColor: colorFolder }}
    >
      <div className={styles.one}></div>
      <div className={styles.two}></div>
    </div>
  )
})

export default Folder
