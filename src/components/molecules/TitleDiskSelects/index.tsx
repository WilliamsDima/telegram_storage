import React, { memo, FC, useState } from 'react'
import Select from '../../organisms/Select'
import styles from './style.module.scss'
import { VscListSelection } from 'react-icons/vsc'

import SelectView from '../../atoms/SelectView'

type TSelects = {}

const views = [
  {
    value: 'large',
    content: () => <SelectView text="Крупная плитка" type="large" />,
  },
  {
    value: 'medium',
    content: () => <SelectView text="Плитка" type="medium" />,
  },
  {
    value: 'list',
    content: () => <SelectView text="Список" type="list" />,
  },
]

const silter = [
  {
    value: 'name',
    content: () => <p>По названию</p>,
  },
  {
    value: 'date',
    content: () => <p>По дате</p>,
  },
  {
    value: 'size',
    content: () => <p>По размеру</p>,
  },
]

const TitleDiskSelects: FC<TSelects> = memo(({}) => {
  const [viewSelect, setViewSelect] = useState('list')
  const [filter, setFilter] = useState('name')

  return (
    <div className={styles.selects}>
      <Select
        select={filter}
        items={silter}
        setSelect={setFilter}
        overStyle={{ marginRight: '1rem' }}
      >
        <VscListSelection className={styles.iconList} fontSize={18} />
      </Select>
      <Select
        select={viewSelect}
        items={views}
        setSelect={setViewSelect}
        hiddenText
        titleMenu={'Вид'}
      />
    </div>
  )
})

export default TitleDiskSelects
