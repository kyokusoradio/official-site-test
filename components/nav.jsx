import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.srOnly}>MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>Top<span>トップ</span></a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>About<span>旭操ラジオについて</span></a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a onClick={closeNav}>News<span>お知らせ</span></a>
          </Link>
        </li>
        <li>
          <Link href="/member">
            <a onClick={closeNav}>Member<span>メンバー紹介</span></a>
          </Link>
        </li>
        <li>
          <Link href="/episodes">
            <a onClick={closeNav}>Episodes<span>エピソード</span></a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a onClick={closeNav}>Blogs<span>ブログや関連リンクなど</span></a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
