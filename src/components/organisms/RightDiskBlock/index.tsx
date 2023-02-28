import React, { memo, FC, MouseEvent, useState } from 'react'
import styles from './style.module.scss'
import { BiArrowToLeft } from 'react-icons/bi'
import cn from 'classnames'
import DiskContent from '../DiskContent'
import { useOutside } from '../../../hooks/useOutside'
import ContextMenu from '../ContextMenu'

type TRight = {
  setHidePanel: (value: boolean) => void
  hidePanel: boolean
}

const RightDiskBlock: FC<TRight> = memo(({ setHidePanel, hidePanel }) => {
  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 })
  const { ref, isShow, setIsShow } = useOutside(false)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const positionChange = {
      x: e.pageX,
      y: e.pageY,
    }
    setXyPosistion(positionChange)
    setIsShow(true)
  }
  return (
    <div
      className={cn(styles.diskBlock, {
        [styles.showPanel]: hidePanel,
      })}
      onContextMenu={handleClick}
    >
      <ContextMenu
        ref={ref}
        open={isShow}
        setIsShow={setIsShow}
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
