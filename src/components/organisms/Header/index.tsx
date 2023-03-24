import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useScrollDirection } from '@hooks/useScrollDirection'
import { useAuth } from '@hooks/useAuth'
import Logo from '@atoms/Logo'
import HeaderAuth from '@molecules/HeaderAuth'

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
