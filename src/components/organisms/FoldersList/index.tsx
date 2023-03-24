import Folder from '@atoms/Folder'
import { IFolder } from '@stores/redusers/main/types'
import React, { memo, FC } from 'react'

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
