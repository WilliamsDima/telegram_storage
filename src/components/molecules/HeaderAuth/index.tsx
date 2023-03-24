import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '@hooks/useAuth'
import UserHeader from '@molecules/UserHeader'
import Button from '@storybook/atoms/Button'

const HeaderAuth = memo(() => {
  const { user, signIn } = useAuth()

  useEffect(() => {}, [user])

  return (
    <div className={styles.auth}>
      {user ? (
        <UserHeader />
      ) : (
        <Button
          style={{
            textTransform: 'uppercase',
            fontWeight: '700',
          }}
          onClick={signIn}
        >
          <FcGoogle
            className={styles.googleIcon}
            fontSize={20}
            style={{ marginRight: '1rem' }}
          />
          войти
        </Button>
      )}
    </div>
  )
})

export default HeaderAuth
