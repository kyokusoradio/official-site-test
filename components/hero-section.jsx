import Link from 'next/link'
import { Client } from "@notionhq/client"
import {getNewsData} from "lib/api"

import styles from "styles/hero.module.css"

import {Hero} from "components/animation/hero"

export default function HeroSection() {
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
      <div className={styles.copy}>
        <p className={styles.copy__main}>Be Condiments</p>
        <p className={styles.copy__sub}>薬味のように、日常に味わいを</p>
      </div>
    </section>
  )
}