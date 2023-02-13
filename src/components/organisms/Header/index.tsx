import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import styles from './style.module.scss'
import Image from 'next/image'
import HeaderAuth from 'molecules/HeaderAuth'
import cn from 'classnames'
import { useScrollDirection } from 'src/hooks/useScrollDirection'

const Header = () => {
  const scrollDirection = useScrollDirection()

  useEffect(() => {}, [])

  return (
    <header
      className={cn(styles.header, {
        [styles.hidden]: scrollDirection === 'down',
        [styles.show]: scrollDirection === 'up',
        [styles.clear]: scrollDirection === 'clear',
      })}
    >
      <div className={styles.headerContent}>
        <div className={styles.product}>
          <Image
            src={require('../../../assets/images/logo.png')}
            alt="logo"
            className={styles.logo}
          />
          <h1>Telegram Storage</h1>
        </div>
        <HeaderAuth />
      </div>
    </header>
  )
}

export default Header
