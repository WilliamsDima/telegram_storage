import { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import DiskTemplate from '../../../src/components/templates/Disk'
import Page from '../../../src/components/templates/Page'
import { DiskProvider } from '../../../src/context/diskContext'
import style from '../../styles/index.module.css'
import { useActions } from '../../../src/hooks/useActions'
import { useAppSelector } from '../../../src/hooks/hooks'
import { findFolder } from '../../../src/utils/helpers'

type TDisk = {
  id: number
}

const Folder: FC<TDisk> = ({ id }) => {
  const { setFolders } = useActions()
  const { folders } = useAppSelector((store) => store.main)

  useEffect(() => {
    const currentFolders = findFolder(id, folders)
    console.log(id)

    // setFolders(currentFolders?.folders)
  }, [id])
  return (
    <DiskProvider>
      <Page>
        <DiskTemplate />
      </Page>
    </DiskProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: { id: query?.id }, // will be passed to the page component as props
  }
}

export default Folder
