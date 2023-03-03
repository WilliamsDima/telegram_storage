import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import Folder from '../../atoms/Folder'
import { IFolder } from '../../../stores/redusers/main/types'

type TFolders = {
  folders: IFolder[]
}

const FoldersList: FC<TFolders> = memo(({ folders }) => {
  return (
    <>
      {folders.map((folder) => {
        return (
          <li key={folder.id.toString()}>
            <Folder folder={folder} />
          </li>
        )
      })}
    </>
  )
})

export default FoldersList
