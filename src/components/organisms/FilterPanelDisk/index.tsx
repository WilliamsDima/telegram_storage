import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useAppSelector } from '@hooks/hooks'
import { useActions } from '@hooks/useActions'
import { filterData } from '@utils/dataFilter'
import Button from '@storybook/atoms/Button'

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
        return (
          <li
            key={item.id}
            className={cn(styles.item, {
              [styles.active]: filter === item.value,
            })}
          >
            <Button onClick={() => selectFilterHandler(item.value)}>
              {item.icons()}
              {item.text}
            </Button>
          </li>
        )
      })}
    </ul>
  )
})

export default FilterPanelDisk
