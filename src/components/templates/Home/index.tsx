import React, { FC } from 'react'
import HomeFirstSection from '../../organisms/HomeFirstSection'
import HomeSecondSection from '../../organisms/HomeSecondSection'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  return (
    <div className={styles.container}>
      <HomeFirstSection />
      <HomeSecondSection />
    </div>
  )
}

export default HomeTemplate
