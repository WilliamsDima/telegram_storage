import cn from 'classnames'
import React, { FC, memo } from 'react'
import styles from './style.module.scss'

type TLoader = {
  active: boolean
}

const Loader: FC<TLoader> = memo(({ active }) => {
  return (
    <div
      className={cn(styles.modalLoading, {
        [styles.active]: active,
      })}
    >
      <div className={styles.content}>
        <div className={styles.planet}>
          <div className={styles.ring}></div>
          <div className={styles.coverRing}></div>
          <div className={styles.spots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
    </div>
  )
})

export default Loader
