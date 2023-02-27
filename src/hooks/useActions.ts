import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { mainActionsSlice } from '../stores/redusers/main/main'
import { useAppDispatch } from './hooks'

const allActions = {
  ...mainActionsSlice,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
