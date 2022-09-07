import Image from "next/image"
import styles from 'styles/logo.module.css'

export function Logo() {
  return (
    <div className={styles.container}>
        <img
          src="./logo.png"
          alt=""
          width="50px"
          height="50px"
        />
      <h1 className={styles.title}>Kyokuso Radio</h1>
    </div>
  )
}