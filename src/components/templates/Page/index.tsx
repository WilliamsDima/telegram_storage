import cn from 'classnames'
import React, { FC, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Loader from '../../atoms/Loader'
import Meta from '../../atoms/Meta'
import MyParticles from '../../atoms/MyParticles'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode
}

const Page: FC<Page> = ({ children }) => {
  const { isLoading, user } = useAuth()

  useEffect(() => {}, [isLoading])

  return (
    <div className={styles.container}>
      <Meta />
      <Header />
      <MyParticles />
      <Loader active={isLoading} />
      <main
        className={cn(styles.main, {
          [styles.disk]: user,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page
