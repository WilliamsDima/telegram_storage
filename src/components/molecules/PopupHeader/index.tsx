import React, { memo, FC } from 'react'
import { User as FirebaseUser } from 'firebase/auth'
import styles from './style.module.scss'
import Avatar from '../../atoms/Avatar'
import {
  AiOutlineLogout,
  AiOutlineUserDelete,
  AiFillCloud,
} from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import Button from '../../atoms/Button'
import { DISK_PATH } from '../../../services/constans'
import Link from 'next/link'

type Popup = {
  user: FirebaseUser
  logout: () => void
}

const PopupHeader: FC<Popup> = memo(({ user, logout }) => {
  const useName =
    user.displayName?.substring(0, 25) +
    (user.displayName?.length > 25 ? '...' : '')

  return (
    <div className={styles.popupContent}>
      <div className={styles.userInfo}>
        <Avatar src={user.photoURL} />
        <h3 className={styles.name}>{useName}</h3>
      </div>
      <div className={styles.item}>
        <Link href={DISK_PATH}>
          <AiFillCloud
            className={styles.cloudIcon}
            fontSize={16}
            style={{ marginRight: '1rem' }}
          />
          Диск
        </Link>
      </div>
      <div className={styles.item}>
        <Button shadowClick={false}>
          <FiSettings
            className={styles.settingsIcon}
            fontSize={16}
            style={{ marginRight: '1rem' }}
          />
          настройки
        </Button>
      </div>
      <ul className={styles.btns}>
        <li>
          <Button shadowClick={false} onClick={logout}>
            <AiOutlineLogout
              className={styles.logoutIcon}
              fontSize={16}
              style={{ marginRight: '1rem' }}
            />
            выйти
          </Button>
        </li>
        <li>
          <Button shadowClick={false}>
            <AiOutlineUserDelete
              className={styles.deleteIcon}
              fontSize={16}
              style={{ marginRight: '1rem' }}
            />
            удалить аккаунт
          </Button>
        </li>
      </ul>
    </div>
  )
})

export default PopupHeader
