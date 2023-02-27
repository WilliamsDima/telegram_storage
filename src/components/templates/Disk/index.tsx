import React, { FC, useEffect, useState } from 'react'
import LeftDiskBlock from '../../organisms/LeftDiskBlock'
import RightDiskBlock from '../../organisms/RightDiskBlock'
import styles from './style.module.scss'

type Page = {}

const DiskTemplate: FC<Page> = ({}) => {
  const [hidePanel, setHidePanel] = useState(false)

  useEffect(() => {}, [])

  return (
    <section className={styles.container}>
      <LeftDiskBlock hidePanel={hidePanel} />
      <RightDiskBlock setHidePanel={setHidePanel} hidePanel={hidePanel} />
    </section>
  )
}

export default DiskTemplate
