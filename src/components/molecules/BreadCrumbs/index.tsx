import React, { FC, memo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { IFolder } from '../../../stores/redusers/main/types'
import { useActions } from '../../../hooks/useActions'
import { MdOutlineArrowBack } from 'react-icons/md'

type TBread = {
  folderSelect: IFolder[]
  title: string
}

const BreadCrumbs: FC<TBread> = memo(({ folderSelect, title }) => {
  const { selectFolder } = useActions()

  const selectHanler = (id: number) => {
    selectFolder(id)
  }
  return (
    <div className={styles.breadCrumbs}>
      <ul className={styles.crumbs}>
        <li onClick={() => selectHanler(folderSelect.length - 1)}>
          <MdOutlineArrowBack className={styles.iconBack} />
        </li>
        {folderSelect.map((folder, i) => {
          return (
            <li
              key={folder.id.toString()}
              onClick={() =>
                i !== folderSelect.length - 1 && selectHanler(i + 1)
              }
            >
              <span className={styles.nameFolder}>{folder.name}</span>
              {i !== folderSelect.length - 1 && (
                <span className={styles.arrow}>{'>'}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default BreadCrumbs
