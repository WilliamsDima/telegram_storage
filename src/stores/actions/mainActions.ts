import { IFolder, IStore } from '../redusers/main/types'
import { PayloadAction } from '@reduxjs/toolkit'

type MainActions = {
  setUserAC: (state: IStore, payload: PayloadAction<any>) => void
  setFilterDisk: (state: IStore, payload: PayloadAction<string>) => void
  addFolder: (state: IStore, payload: PayloadAction<IFolder>) => void
  setFolders: (state: IStore, payload: PayloadAction<IFolder[]>) => void
}

export const mainActions: MainActions = {
  setUserAC: (state, { payload }) => {
    state.user = payload
  },
  setFilterDisk: (state, { payload }) => {
    state.filter = payload
  },
  addFolder: (state, { payload }) => {
    state.folders.push(payload)
  },
  setFolders: (state, { payload }) => {
    state.folders = payload || []
  },
}
