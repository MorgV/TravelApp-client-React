import React from 'react'
import styles from './footer.module.scss';
import { useRouter } from 'next/router';

type TypeNavItem = {
  icon: string
  link: string
}

const navItems: TypeNavItem[] = [
  {
    icon: 'home',
    link: '/'
  },
  {
    icon: 'explore',
    link: '/explore'
  },
  {
    icon: 'place',
    link: '/place/kyoto'
  },
  {
    icon: 'person_outlined',
    link: '/profile'
  },
]

const Footer = () => {
  const { push, pathname } = useRouter()

  return (
    <footer className={styles.footer}>
      <nav>
        {navItems.map(item =>
          <button className={pathname === item.link ? styles.active : ''} onClick={() => push(item.link)} key={item.icon}>
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        )}
      </nav>
    </footer>
  )
}

export default Footer