import styles from 'styles/footer.module.css'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footerLink}>
         <Link href="" className={styles.mailLink}>
          <a>お問合せ・質問</a>
        </Link>
        <Link href='' className={styles.privacyPolicy}>
          <a>プライバシーポリシー</a>
        </Link>
      </div>
      <p className={styles.copyright}>&copy;Kyokuso Radio</p>
    </footer>
  )
}