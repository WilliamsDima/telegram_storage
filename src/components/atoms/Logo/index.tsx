import Image from 'next/image'
import React, { FC, memo } from 'react'
import styles from './style.module.scss'

type TLogo = {}

const Logo: FC<TLogo> = memo(({}) => {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width={512}
      height={512}
      className={styles.logo}
    />
  )
})

export default Logo
