import React, { FC, memo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { MdOutlineArrowBack } from 'react-icons/md'
import { IFolder } from '@stores/redusers/main/types'
import { useActions } from '@hooks/useActions'

type TBread = {
  foldersPath: IFolder[]
  title: string
}

const BreadCrumbs: FC<TBread> = memo(({ foldersPath, title }) => {
  const { selectFolder } = useActions()

  const selectHanler = (id: number) => {
    selectFolder(id)
  }
  return (
    <div className={styles.breadCrumbs}>
      <ul className={styles.crumbs}>
        <li onClick={() => selectHanler(foldersPath.length - 1)}>
          <MdOutlineArrowBack className={styles.iconBack} />
        </li>
        {foldersPath.map((folder, i) => {
          return (
            <li
              key={folder.id.toString()}
              onClick={() =>
                i !== foldersPath.length - 1 && selectHanler(i + 1)
              }
            >
              <span className={styles.nameFolder}>{folder.name}</span>
              {i !== foldersPath.length - 1 && (
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
