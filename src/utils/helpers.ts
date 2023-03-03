import { IFolder } from '../stores/redusers/main/types'
import { filterData } from './dataFilter'

export const getDiskTitle = (value: string) => {
  return filterData.find((it) => it.value === value).text || value
}

export const cutText = (text: string = '', length: number = 25) => {
  return text.substring(0, length) + (text?.length > length ? '...' : '')
}

export const findFolder = (id: number, folders: IFolder[]): IFolder | null => {
  return folders.find((f) => f.id === +id)
}
