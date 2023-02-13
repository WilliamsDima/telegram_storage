import Header from 'organisms/Header'
import React, { FC } from 'react'
import Meta from '../../atoms/Meta'
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode
}

const Page: FC<Page> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Header />

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
