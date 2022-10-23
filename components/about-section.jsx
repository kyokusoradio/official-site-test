import Link from 'next/link'
import { Client } from "@notionhq/client"
import {getNewsData} from "lib/api"

import styles from "styles/about.module.css"

export default function AboutSection() {
  return (
    <section className={styles.aboutContainer}>
        <p>
          旭操ラジオは、<br></br>
          日常の中に潜む「そういえば」な話題を取り上げ<br></br>
          僕たちならではの視点を取り入れて、ゆるっとお話しする番組です。</p>
        <p>配信は週に１エピソード程度で頑張っています。</p>
        <p>お便り・質問などお待ちしております。</p>
        <div className={styles.linkToAboutPage}>
          <Link href='/about'>
            <a>もっと旭操ラジオについて知る</a>
          </Link>
        </div>
      </section>
  )
}