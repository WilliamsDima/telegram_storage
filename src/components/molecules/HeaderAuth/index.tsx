import React, { memo } from 'react'
import Button from 'atoms/Button'
import Head from 'next/head'
import styles from './style.module.scss'
import { FcGoogle } from 'react-icons/fc'

const HeaderAuth = memo(() => {
  return (
    <div className={styles.auth}>
      <Button
        overStyles={{
          fontSize: 18,
          textTransform: 'uppercase',
          fontWeight: '700',
        }}
      >
        <FcGoogle fontSize={20} style={{ marginRight: '1rem' }} />
        войти
      </Button>
    </div>
  )
})

export default HeaderAuth
