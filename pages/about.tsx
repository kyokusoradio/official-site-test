import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/about-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import { AboutTop } from "components/animation/about-top"
import Footer from "components/footer"

const About: NextPage = () => {
  return (
      <>
      <Header />
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>About</h1>
        <p className={styles.titleBox__subtitle}>旭操ラジオってなんなん？</p>
      </div>
      <AboutTop />
      <div className={styles.texts}>
        <p className={styles.text}>旭操ラジオは、トップページにも書いたように、日常の中に潜む「そういえば」な話題を取り上げ僕たちならではの視点を取り入れて、ゆるっとお話しする番組です。</p>
        <p className={styles.text}>配信は週に１エピソード程度で頑張っていますが不定期だと思ってくれた方ががっかりすることは少ないと思います。</p>
        <p className={styles.text}>ゆきうえが大学生の時に、就活でうまいこと話ができるように、日々何を考えたのかを振り返るきっかけを作ろうと思って始めました。</p>
        <p className={styles.text}>毎エピソードの最後で、皆さんからのお便りを読むコーナーがありますので、質問やお便りをどうか送ってください。<br />
          出演したいという方がいたら基本OKで検討します。<br />
          その場合も下のお便りを書くボタンで教えてください。</p>
      </div>
      <Footer />
      </>
  )
}

export default About
