import { IFolder, IStore } from '../redusers/main/types'
import { PayloadAction } from '@reduxjs/toolkit'

type MainActions = {
  setUserAC: (state: IStore, payload: PayloadAction<any>) => void
  setFilterDisk: (state: IStore, payload: PayloadAction<string>) => void
  addFolder: (state: IStore, payload: PayloadAction<IFolder>) => void
  setFolders: (state: IStore, payload: PayloadAction<IFolder[]>) => void
  selectFolder: (
    state: IStore,
    payload: PayloadAction<IFolder | number>
  ) => void
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
  selectFolder: (state, { payload }) => {
    if (typeof payload === 'object') {
      state.folderSelect.push(payload)
    } else {
      state.folderSelect = state.folderSelect.slice(0, payload)
    }
  },
}
