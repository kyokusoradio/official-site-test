import Link from 'next/link'
import { Logo } from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Link href="/">
          <Logo />
        </Link>
          <Nav />
        </div>
    </header>
  )
}
