import { FC } from 'react'
import DiskTemplate from '../../src/components/templates/Disk'
import Page from '../../src/components/templates/Page'
import { DiskProvider } from '../../src/context/diskContext'
import style from '../styles/index.module.css'

type TDisk = {}

const Disk: FC<TDisk> = ({}) => {
  return (
    <DiskProvider>
      <Page>
        <DiskTemplate />
      </Page>
    </DiskProvider>
  )
}

export default Disk
