import React, { FC, useEffect } from 'react'
import styles from './style.module.scss'

type Page = {}

const DiskTemplate: FC<Page> = ({}) => {
  useEffect(() => {}, [])

  return <div className={styles.container}>DiskTemplate</div>
}

export default DiskTemplate
