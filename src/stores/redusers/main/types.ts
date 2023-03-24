export interface IFolder {
  id: number
  name: string
  folders: IFolder[]
}

export interface IMessage {
  title?: string
  text: string
  error?: boolean
  callback: () => void
}

export interface ITooltip {
  text: string
  error?: boolean
}

export interface IStore {
  user: null | any
  filter: string | null
  folders: IFolder[]
  foldersPath: IFolder[]
  message: IMessage | null
  tooltip: ITooltip | null
}
