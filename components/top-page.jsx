import styles from "styles/top-page.module.css"

import {Hero} from "components/animation/hero"

export default function Toppage() {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.title}>
        <span className={styles.titleTop}>Kyokuso</span><br></br>
        <span className={styles.titleBottom}>Radio</span>
      </h1>
      <p className={styles.subtitle}>「そういえば」な話題をゆるっとお届けするポッドキャスト</p>
      <div className={styles.topAnimation}>
        <Hero />
      </div>
    </section>
  )
}