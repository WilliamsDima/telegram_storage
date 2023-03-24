import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import { BsFillCloudyFill } from 'react-icons/bs'
import cn from 'classnames'

type TBottom = {}

const BottomLeftPanel: FC<TBottom> = memo(({}) => {
  return (
    <div className={styles.bottom}>
      <p>56 Гб</p>
      <BsFillCloudyFill className={styles.icon} fontSize={30} />
    </div>
  )
})

export default BottomLeftPanel
