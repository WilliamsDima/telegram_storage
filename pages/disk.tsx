import { DiskProvider } from '@context/diskContext'
import DiskTemplate from '@templates/Disk'
import Page from '@templates/Page'
import { FC, useEffect } from 'react'
import style from '../styles/index.module.css'

type TDisk = {}

const Disk: FC<TDisk> = ({}) => {
  useEffect(() => {}, [])
  return (
    <DiskProvider>
      <Page>
        <DiskTemplate />
      </Page>
    </DiskProvider>
  )
}

export default Disk
