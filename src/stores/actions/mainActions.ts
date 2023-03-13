import { updateRecursivelyFolder } from './../../utils/helpers'
import { IFolder, IMessage, IStore, ITooltip } from '../redusers/main/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { filterRecursivelyFolders } from '../../utils/helpers'

type MainActions = {
  setUserAC: (state: IStore, payload: PayloadAction<any>) => void
  setFilterDisk: (state: IStore, payload: PayloadAction<string>) => void
  addFolder: (state: IStore, payload: PayloadAction<IFolder>) => void
  setFolders: (state: IStore, payload: PayloadAction<IFolder[]>) => void
  deleteFolder: (state: IStore, payload: PayloadAction<number>) => void
  renameFolder: (state: IStore, payload: PayloadAction<IFolder>) => void
  selectFolder: (
    state: IStore,
    payload: PayloadAction<IFolder | number>
  ) => void
  setMessage: (state: IStore, payload: PayloadAction<IMessage | null>) => void
  setTooltip: (state: IStore, payload: PayloadAction<ITooltip | null>) => void
}

export const mainActions: MainActions = {
  setUserAC: (state, { payload }) => {
    state.user = payload
  },
  setFilterDisk: (state, { payload }) => {
    state.filter = payload
  },
  setFolders: (state, { payload }) => {
    state.folders = payload || []
  },
  selectFolder: (state, { payload }) => {
    if (typeof payload === 'object') {
      state.foldersPath.push(payload)
    } else {
      state.foldersPath = state.foldersPath.slice(0, payload)
    }
  },
  addFolder: (state, { payload }) => {
    if (state.foldersPath.length) {
      state.foldersPath[state.foldersPath.length - 1].folders.push(payload)
      const folder = state.foldersPath[state.foldersPath.length - 1]

      state.folders = updateRecursivelyFolder(state.folders, folder)
    } else {
      state.folders.push(payload)
    }
  },
  deleteFolder: (state, { payload }) => {
    state.folders = filterRecursivelyFolders(state.folders, payload)

    if (state.foldersPath.length) {
      state.foldersPath = filterRecursivelyFolders(state.foldersPath, payload)
    }
  },
  renameFolder: (state, { payload }) => {
    state.folders = updateRecursivelyFolder(state.folders, payload)

    // if (state.foldersPath.length) {
    //   state.foldersPath = filterRecursivelyFolders(state.foldersPath, payload)
    // }
  },
  setMessage: (state, { payload }) => {
    state.message = payload
  },
  setTooltip: (state, { payload }) => {
    state.tooltip = payload
  },
}
