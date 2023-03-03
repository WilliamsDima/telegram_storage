import { mainActions } from './../../actions/mainActions'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStore } from './types'

const folders = [
  {
    id: 1,
    name: 'Первая папка',
    folders: [],
  },
  {
    id: 2,
    name: 'Вторая папка',
    folders: [],
  },
  {
    id: 3,
    name: 'Третья папка',
    folders: [],
  },
  {
    id: 4,
    name: 'Четвертая папка',
    folders: [],
  },
  {
    id: 5,
    name: 'Пятая папка',
    folders: [
      {
        id: 6,
        name: 'Фото',
        folders: [],
      },
      {
        id: 7,
        name: 'Папккааааааа',
        folders: [],
      },
    ],
  },
]

const initialState: IStore = {
  user: null,
  filter: 'main',
  folders: folders,
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
