import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Logo from '@atoms/Logo'
import FooterItem from '@molecules/FooterItem'

type TFooter = {}

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

const contacts = [
  {
    id: 1,
    text: 'Вконтакте',
    link: 'https://vk.com/williamsdy',
    icon: '/images/contacts/vk.svg',
  },
  {
    id: 2,
    text: 'Instagram',
    link: 'https://www.instagram.com/williams.css/',
    icon: '/images/contacts/inst.svg',
  },
  {
    id: 3,
    text: 'Telegram',
    link: 'https://t.me/DyWilliams',
    icon: '/images/contacts/telegram.svg',
  },
]

const Footer: FC<TFooter> = memo(({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapp}>
        <div
          className={`${styles.item} ${styles.logo}`}
          style={{ flexDirection: 'row' }}
        >
          <Logo />
          <h3>Telegram Storage</h3>
        </div>

        <FooterItem list={apps} title={'Другие приложения'} />
        <FooterItem list={contacts} title={'Контакты'} />
      </div>
      <a
        className={styles.web}
        href="https://williams-dy.ru/"
        target={'_blank'}
      >
        <Image
          src={'/images/contacts/site.svg'}
          alt={'dev site'}
          width={48}
          height={48}
          className={styles.siteLogo}
        />
        сайт разработчика: williams-dy.ru
      </a>
    </footer>
  )
})

export default Footer
