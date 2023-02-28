import React, { memo, FC, ReactNode, useMemo, CSSProperties } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { useOutside } from '../../../hooks/useOutside'
import { MdKeyboardArrowDown } from 'react-icons/md'

type Item = {
  value: string
  content: () => ReactNode
}

type TSelect = {
  select: string
  items: Item[]
  setSelect: (value: string) => void
  hiddenText?: boolean
  titleMenu?: string
  children?: ReactNode
  overStyle?: CSSProperties
}

const Select: FC<TSelect> = memo(
  ({
    select,
    items,
    setSelect,
    hiddenText = false,
    titleMenu,
    children,
    overStyle,
  }) => {
    const { ref, isShow, setIsShow } = useOutside(false)

    const currentSelect = useMemo(() => {
      return items.find((it) => it.value === select)?.content()
    }, [select])

    const selectHandler = (value: string) => {
      setIsShow(false)
      setSelect(value)
    }

    return (
      <div
        className={cn(styles.select, {
          [styles.open]: isShow,
          [styles.hiddenText]: hiddenText,
        })}
        style={overStyle}
        onClick={() => setIsShow(true)}
      >
        {children}
        {currentSelect}
        <MdKeyboardArrowDown className={styles.iconArrow} fontSize={20} />

        <ul className={styles.menu} ref={ref}>
          {titleMenu && <p className={styles.title}>{titleMenu}</p>}
          {items.map((item) => {
            return (
              <li key={item.value}>
                <div
                  className={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation()
                    selectHandler(item.value)
                  }}
                >
                  {item?.content()}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
)

export default Select
