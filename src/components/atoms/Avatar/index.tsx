import React, { FC, memo } from 'react'
import styles from './style.module.scss'

type TAvatar = {
  src: string
}

const Avatar: FC<TAvatar> = memo(({ src }) => {
  return (
    <div className={styles.avatar}>
      <img src={src} />
    </div>
  )
})

export default Avatar
