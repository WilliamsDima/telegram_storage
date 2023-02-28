import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { HiViewGrid } from 'react-icons/hi'
import { MdViewComfy } from 'react-icons/md'
import { FaListUl } from 'react-icons/fa'

type TSelect = {
  text: string
  type: 'large' | 'medium' | 'list'
}

const SelectView: FC<TSelect> = memo(({ text, type }) => {
  const icons = {
    large: () => <HiViewGrid className={styles.icon} fontSize={20} />,
    medium: () => (
      <MdViewComfy
        className={styles.icon}
        fontSize={20}
        style={{ transform: 'scale(0.9)' }}
      />
    ),
    list: () => (
      <FaListUl
        className={styles.icon}
        fontSize={20}
        style={{ transform: 'scale(0.7)' }}
      />
    ),
  }

  return (
    <>
      {icons[type]()}
      <p className={styles.text}>{text}</p>
    </>
  )
})

export default SelectView
