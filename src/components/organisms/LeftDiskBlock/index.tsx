import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Button from '../../atoms/Button'
import { MdOutlineCloudDownload, MdAdd } from 'react-icons/md'

import FilterPanelDisk from '../FilterPanelDisk'
import BottomLeftPanel from '../../atoms/BottomLeftPanel'

type TLeft = {
  hidePanel: boolean
}

const LeftDiskBlock: FC<TLeft> = memo(({ hidePanel }) => {
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
          <Button>
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
