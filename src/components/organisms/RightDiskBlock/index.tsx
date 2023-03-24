import React, { memo, FC, MouseEvent } from 'react'
import styles from './style.module.scss'
import { BiArrowToLeft } from 'react-icons/bi'
import cn from 'classnames'
import { useDisk } from '@context/diskContext'
import ContextMenu from '@organisms/ContextMenu'
import DiskContent from '@organisms/DiskContent'

type TRight = {
  setHidePanel: (value: boolean) => void
  hidePanel: boolean
}

const RightDiskBlock: FC<TRight> = memo(({ setHidePanel, hidePanel }) => {
  const {
    handleClickContextMenu,
    xYPosistion,
    refContextMenu,
    showContextMenu,
    setIsShowContextMenu,
  } = useDisk()

  const handlerContext = (e: MouseEvent<HTMLDivElement>) => {
    handleClickContextMenu(e)
  }

  return (
    <div
      className={cn(styles.diskBlock, {
        [styles.showPanel]: hidePanel,
      })}
      onContextMenu={handlerContext}
    >
      <ContextMenu
        ref={refContextMenu}
        open={showContextMenu}
        setIsShow={setIsShowContextMenu}
        position={{ top: xYPosistion.y, left: xYPosistion.x }}
      />

      <button
        className={styles.btnHidePanel}
        onClick={() => setHidePanel(!hidePanel)}
      >
        <BiArrowToLeft className={styles.arrowIcon} fontSize={20} />
      </button>
      <DiskContent />
    </div>
  )
})

export default RightDiskBlock
