import { IFolder } from '../stores/redusers/main/types'
import { filterData } from './dataFilter'

export const getDiskTitle = (value: string) => {
  return filterData.find((it) => it.value === value).text || value
}

export const cutText = (text: string = '', length: number = 15) => {
  return text.substring(0, length) + (text?.length > length ? '...' : '')
}

export const findFolder = (id: number, folders: IFolder[]): IFolder | null => {
  return folders.find((f) => f.id === +id)
}

export const filterRecursivelyFolders = (folders: IFolder[], id: number) => {
  // глубокий поиск по дереву и удаление папки

  try {
    return folders
      .map((folder) =>
        folder.folders.length
          ? {
              ...folder,
              folders: filterRecursivelyFolders(folder.folders, id),
            }
          : folder
      )
      .filter((folder) => folder.id !== id)
  } catch (error) {
    console.log('error filterRecursivelyFolders', error)
  }
}

export const updateRecursivelyFolder = (
  folders: IFolder[],
  folder: IFolder
) => {
  // глубокий поиск по дереву и обновление папки

  try {
    return folders.map((f) => {
      if (f.id === folder.id) {
        f = folder
      }

      return f.folders.length
        ? {
            ...f,
            folders: updateRecursivelyFolder(f.folders, folder),
          }
        : f
    })
  } catch (error) {
    console.log('error updateRecursivelyFolder', error)
  }
}

export const updateAllIdFolder = (folder: IFolder) => {
  // глубокий поиск по дереву и обновление папки

  try {
    return folder.folders.map((f) => {
      if (f.id === folder.id) {
        f.id = f.id + +new Date()
      }

      return f.folders.length
        ? {
            ...f,
            folders: updateAllIdFolder(f),
          }
        : f
    })
  } catch (error) {
    console.log('error updateAllIdFolder', error)
  }
}
