import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

const apps = [
  {
    id: 1,
    text: 'Password Manager',
    link: 'https://play.google.com/store/apps/details?id=com.eclipse.account_manager',
    icon: '/images/app/password.png',
  },
  {
    id: 2,
    text: 'Управление финансами',
    link: 'https://play.google.com/store/apps/details?id=com.moneymanager_williams',
    icon: '/images/app/mony.png',
  },
  {
    id: 3,
    text: 'Запоминатор',
    link: 'https://play.google.com/store/apps/details?id=com.eclipse.my_to_do_list',
    icon: '/images/app/todo.png',
  },
  {
    id: 4,
    text: 'Code Base',
    link: 'https://code-base-702c2.web.app/',
    icon: '/images/app/code_base.png',
  },
]

type Item = {
  id: number
  text: string
  link: string
  icon: string
}

type TFooter = {
  list: Item[]
  title: string
}

const FooterItem: FC<TFooter> = memo(({ list, title }) => {
  return (
    <div className={styles.footerItem}>
      <h4>{title}</h4>
      <ul className={styles.list}>
        {list.map((item) => {
          return (
            <a
              key={item.id}
              className={styles.item}
              href={item.link}
              target="_blank"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={48}
                height={48}
                className={styles.icon}
              />

              {item.text}
            </a>
          )
        })}
      </ul>
    </div>
  )
})

export default FooterItem
