import { FC } from 'react'
import DiskTemplate from '../src/components/templates/Disk'
import Page from '../src/components/templates/Page'
import style from '../styles/index.module.css'

type TDisk = {}

const Disk: FC<TDisk> = ({}) => {
  return (
    <Page>
      <DiskTemplate />
    </Page>
  )
}

export default Disk
