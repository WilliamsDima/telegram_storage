import { IStore } from '../redusers/main/types'
import { PayloadAction } from '@reduxjs/toolkit'

type MainActions = {
  setUserAC: (state: IStore, payload: PayloadAction<any>) => void
}

export const mainActions: MainActions = {
  setUserAC: (state, { payload }) => {
    state.user = payload
  },
}
