import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { MdOutlineCloudDownload, MdAdd } from 'react-icons/md'
import { useDisk } from '@context/diskContext'
import Button from '@storybook/atoms/Button'
import FilterPanelDisk from '@organisms/FilterPanelDisk'
import BottomLeftPanel from '@atoms/BottomLeftPanel'

type TLeft = {
  hidePanel: boolean
}

const LeftDiskBlock: FC<TLeft> = memo(({ hidePanel }) => {
  const { setIsShowModalCreater } = useDisk()
  return (
    <div
      className={cn(styles.leftPanel, {
        [styles.hidenPanel]: hidePanel,
      })}
    >
      <div className={styles.wrapPanel}>
        <div className={styles.topBtns}>
          <Button>
            <MdOutlineCloudDownload
              className={styles.icon}
              fontSize={20}
              style={{ marginRight: '1rem' }}
            />
            Загрузить
          </Button>
          <Button onClick={() => setIsShowModalCreater(true)}>
            <MdAdd
              className={styles.icon}
              fontSize={20}
              style={{ marginRight: '1rem' }}
            />
            Создать
          </Button>
        </div>

        <FilterPanelDisk />
        <BottomLeftPanel />
      </div>
    </div>
  )
})

export default LeftDiskBlock
