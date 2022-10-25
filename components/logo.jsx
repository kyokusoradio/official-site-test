import Image from "next/image"
import Link from "next/link"
import styles from 'styles/logo.module.css'

export function Logo() {
  return (
    <div className={styles.container}>
        <img
          className={styles.logo}
            src="/logo.png"
            alt=""
        />
        <h1 className={styles.title}>
          <img
            src="/kyokusoradio.svg"
            alt="kyokuso radio"
          />
        </h1>
    </div>
  )
}