import React, { FC } from 'react'
import HomeFirstSection from '../../organisms/HomeFirstSection'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  return (
    <div className={styles.container}>
      <HomeFirstSection />
    </div>
  )
}

export default HomeTemplate
