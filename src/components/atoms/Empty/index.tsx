import Image from 'next/image'
import React, { FC, memo } from 'react'
import styles from './style.module.scss'

type TEmpty = {}

const Empty: FC<TEmpty> = memo(({}) => {
  return (
    <div className={styles.empty}>
      <Image
        src="/images/empty-box.png"
        alt="logo"
        width={512}
        height={512}
        className={styles.img}
      />
      <p>пусто</p>
    </div>
  )
})

export default Empty
