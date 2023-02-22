import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import styles from './style.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import { useScrollDirection } from '../../../hooks/useScrollDirection'
import HeaderAuth from '../../molecules/HeaderAuth'
import Logo from '../../atoms/Logo'
import { useAuth } from '../../../hooks/useAuth'

const Header = () => {
  const scrollDirection = useScrollDirection()
  const { user } = useAuth()

  useEffect(() => {}, [scrollDirection])

  return (
    <header
      className={cn(styles.header, {
        [styles.hidden]: scrollDirection === 'down' && !user,
        [styles.show]: scrollDirection === 'up' && !user,
        [styles.clear]: scrollDirection === 'clear' && !user,
        [styles.disk]: user,
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
