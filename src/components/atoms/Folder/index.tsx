import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { IFolder } from '../../../stores/redusers/main/types'
import { cutText } from '../../../utils/helpers'
import { HiFolder } from 'react-icons/hi'
import { useDisk } from '../../../context/diskContext'
import { useActions } from '../../../hooks/useActions'

type TFolder = {
  overStyles?: CSSProperties
  colorFolder?: string
  neon?: boolean
  name?: string
  folder?: IFolder
}

const Folder: FC<TFolder> = memo(
  ({ overStyles, colorFolder, neon = false, name, folder }) => {
    const folderName = name ? cutText(name) : cutText(folder?.name)
    const { setFolders } = useActions()

    const openFolderHandler = () => {
      folder && setFolders(folder.folders)
    }

    return (
      <div
        className={cn(styles.folderWrapper, {
          [styles.neon]: neon,
        })}
        onDoubleClick={openFolderHandler}
      >
        <div className={styles.folder}>
          <HiFolder className={styles.folderIcon} style={overStyles} />
        </div>

        {folderName && <p>{folderName}</p>}
      </div>
    )
  }
)

export default Folder
