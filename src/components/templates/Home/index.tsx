import React, { FC } from 'react'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  return <div className={styles.container}>HomeTemplate</div>
}

export default HomeTemplate
