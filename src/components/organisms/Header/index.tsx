import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import styles from './style.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import { useScrollDirection } from '../../../hooks/useScrollDirection'
import HeaderAuth from '../../molecules/HeaderAuth'
import Logo from '../../atoms/Logo'
import { useAuth } from '../../../hooks/useAuth'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const scrollDirection = useScrollDirection()
  const { user } = useAuth()
  const [statickHeader, setStatickHeader] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.route.includes('disk')) {
      setStatickHeader(true)
    }
  }, [router.route])
  useEffect(() => {}, [scrollDirection])

  return (
    <header
      className={cn(styles.header, {
        [styles.hidden]: scrollDirection === 'down' && !statickHeader,
        [styles.show]: scrollDirection === 'up' && !statickHeader,
        [styles.clear]: scrollDirection === 'clear' && !statickHeader,
        [styles.disk]: statickHeader,
      })}
    >
      <div className={styles.headerContent}>
        <Link className={styles.product} href={'/'}>
          <Logo />
          <h1>Telegram Storage</h1>
        </Link>
        <HeaderAuth />
      </div>
    </header>
  )
}

export default Header
