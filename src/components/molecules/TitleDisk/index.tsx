import React, { FC, memo, useMemo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useAppSelector } from '@hooks/hooks'
import { getDiskTitle } from '@utils/helpers'
import BreadCrumbs from '@molecules/BreadCrumbs'
import TitleDiskSelects from '@molecules/TitleDiskSelects'

type TDisk = {}

const TitleDisk: FC<TDisk> = memo(({}) => {
  const { filter, foldersPath } = useAppSelector((store) => store.main)

  const title = useMemo(() => {
    return getDiskTitle(filter || '')
  }, [filter])

  return (
    <div className={styles.title}>
      {foldersPath.length ? (
        <BreadCrumbs title={title} foldersPath={foldersPath} />
      ) : (
        <div>
          <h1>{title}</h1>
        </div>
      )}

      <TitleDiskSelects />
    </div>
  )
})

export default TitleDisk
