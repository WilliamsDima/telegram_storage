import { mainActions } from './../../actions/mainActions'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStore } from './types'

const initialState: IStore = {
  user: null,
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    ...mainActions,
  },
})

export const mainReducer = (state = initialState, action: PayloadAction) => {
  return mainSlice.reducer(state, action)
}

export const mainActionsSlice = mainSlice.actions
