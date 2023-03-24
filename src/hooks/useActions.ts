import { bindActionCreators } from '@reduxjs/toolkit'
import { mainActionsSlice } from '@stores/redusers/main/main'
import { useMemo } from 'react'
import { useAppDispatch } from './hooks'

const allActions = {
  ...mainActionsSlice,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
