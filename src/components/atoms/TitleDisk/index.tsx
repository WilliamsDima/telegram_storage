import React, { FC, memo, useMemo, useCallback } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useAppSelector } from '../../../hooks/hooks'
import { getDiskTitle } from '../../../utils/helpers'

type TDisk = {}

const TitleDisk: FC<TDisk> = memo(({}) => {
  const { filter } = useAppSelector((store) => store.main)

  const title = useMemo(() => {
    return getDiskTitle(filter)
  }, [filter])

  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <div>вид</div>
    </div>
  )
})

export default TitleDisk
