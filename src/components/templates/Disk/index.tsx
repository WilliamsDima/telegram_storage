import React, { FC, useEffect, useState } from 'react'
import { useDisk } from '../../../context/diskContext'
import LeftDiskBlock from '../../organisms/LeftDiskBlock'
import Modal from '../../organisms/Modal'
import ModalCreater from '../../organisms/ModalCreater'
import RightDiskBlock from '../../organisms/RightDiskBlock'
import styles from './style.module.scss'

type Page = {}

const DiskTemplate: FC<Page> = ({}) => {
  const [hidePanel, setHidePanel] = useState(false)
  const { refModalCreater, showModalCreater } = useDisk()

  useEffect(() => {}, [])

  return (
    <>
      <Modal open={showModalCreater} ref={refModalCreater}>
        <ModalCreater />
      </Modal>

      <section className={styles.container}>
        <LeftDiskBlock hidePanel={hidePanel} />
        <RightDiskBlock setHidePanel={setHidePanel} hidePanel={hidePanel} />
      </section>
    </>
  )
}

export default DiskTemplate
