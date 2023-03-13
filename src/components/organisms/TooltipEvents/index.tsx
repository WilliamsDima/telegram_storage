import React, { memo, FC, useEffect } from 'react'
import styles from './style.module.scss'
import { useAppSelector } from '../../../hooks/hooks'
import cn from 'classnames'
import { useActions } from '../../../hooks/useActions'

const TooltipEvents: FC = memo(() => {
  const { tooltip } = useAppSelector((store) => store.main)
  const { setTooltip } = useActions()

  useEffect(() => {
    if (tooltip) {
      setTimeout(() => {
        setTooltip(null)
      }, 2000)
    }
  }, [tooltip])

  return (
    <div
      className={cn(styles.tooltip, {
        [styles.show]: !!tooltip,
        [styles.error]: tooltip?.error,
      })}
    >
      {!!tooltip && <p>{tooltip.text}</p>}
    </div>
  )
})

export default TooltipEvents
