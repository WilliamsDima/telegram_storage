import React, { FC } from 'react'
import Meta from '../../atoms/Meta'
import MyParticles from '../../atoms/MyParticles'
import Header from '../../organisms/Header'
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode
}

const Page: FC<Page> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Header />
      <MyParticles />

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
