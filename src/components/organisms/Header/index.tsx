import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import styles from './style.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import { useScrollDirection } from '../../../hooks/useScrollDirection'
import HeaderAuth from '../../molecules/HeaderAuth'
import Logo from '../../atoms/Logo'

const Header = () => {
  const scrollDirection = useScrollDirection()

  useEffect(() => {}, [scrollDirection])

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
          <Logo />
          <h1>Telegram Storage</h1>
        </div>
        <HeaderAuth />
      </div>
    </header>
  )
}

export default Header
