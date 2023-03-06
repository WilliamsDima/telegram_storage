import React, { FC, memo, useMemo } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useAppSelector } from '../../../hooks/hooks'
import { getDiskTitle } from '../../../utils/helpers'
import TitleDiskSelects from '../TitleDiskSelects'
import BreadCrumbs from '../BreadCrumbs'

type TDisk = {}

const TitleDisk: FC<TDisk> = memo(({}) => {
  const { filter, folderSelect } = useAppSelector((store) => store.main)

  const title = useMemo(() => {
    return getDiskTitle(filter)
  }, [filter])

  return (
    <div className={styles.title}>
      {folderSelect.length ? (
        <BreadCrumbs title={title} folderSelect={folderSelect} />
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
