import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

type TFolder = {
  overStyles?: CSSProperties
  colorFolder?: string
  neon?: boolean
  name?: string
}

const Folder: FC<TFolder> = memo(
  ({ overStyles, colorFolder, neon = false, name }) => {
    const folderName = name?.substring(0, 25) + (name?.length > 25 ? '...' : '')
    return (
      <div
        className={cn(styles.folderWrapper, {
          [styles.neon]: neon,
        })}
      >
        <div
          className={styles.folder}
          style={{ ...overStyles, backgroundColor: colorFolder }}
        >
          <div className={styles.one}></div>
          <div className={styles.two}></div>
        </div>
        {!!name && <p>{folderName}</p>}
      </div>
    )
  }
)

export default Folder
