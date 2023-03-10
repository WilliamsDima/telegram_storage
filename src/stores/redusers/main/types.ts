export interface IFolder {
  id: number
  name: string
  folders: IFolder[]
}

export interface IStore {
  user: null | any
  filter: string | null
  folders: IFolder[]
  foldersPath: IFolder[]
}
