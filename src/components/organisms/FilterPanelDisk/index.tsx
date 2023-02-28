import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'

import { useAppSelector } from '../../../hooks/hooks'
import { filterData } from '../../../utils/dataFilter'
import { useActions } from '../../../hooks/useActions'

type TFilter = {}

const FilterPanelDisk: FC<TFilter> = memo(({}) => {
  const { filter } = useAppSelector((store) => store.main)
  const { setFilterDisk } = useActions()

  const selectFilterHandler = (value: string) => {
    setFilterDisk(value)
  }

  return (
    <ul className={styles.filter}>
      {filterData.map((item) => {
        return <li></li>
      })}
    </ul>
  )
})

export default FilterPanelDisk
