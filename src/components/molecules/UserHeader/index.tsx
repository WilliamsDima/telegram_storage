import React, { memo, FC, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useOutside } from '../../../hooks/useOutside'
import Avatar from '../../atoms/Avatar'
import Popup from '../../organisms/Popup'
import PopupHeader from '../PopupHeader'
import styles from './style.module.scss'

type User = {}

const UserHeader: FC<User> = memo(({}) => {
  const { user, logout } = useAuth()
  const { ref, isShow, setIsShow } = useOutside(false)

  useEffect(() => {}, [user])
  return (
    <div className={styles.user}>
      <button onClick={() => setIsShow(true)}>
        <Avatar src={user.photoURL} />
      </button>

      <div ref={ref}>
        <Popup open={isShow}>
          <PopupHeader user={user} logout={logout} />
        </Popup>
      </div>
    </div>
  )
})

export default UserHeader
