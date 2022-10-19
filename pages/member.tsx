import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/member-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import {MembersTop} from "components/animation/members-top"
import Footer from "components/footer"

const Members: NextPage = () => {
  return (
      <>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Members</h1>
        <p className={styles.titleBox__subtitle}>おそらく毎回いる人たちとゲストの皆さんの紹介</p>
      </div>
      <div className={styles.imageFrame}>
        <MembersTop />
      </div>

      <div className={styles.texts}>
        <p className={styles.text}>基本的にはゆきうえとスギオカの2人で話をしていますが、たまにゲストが来てくれます。</p>
        <p className={styles.text}>このページではゆきうえとスギオカの情報を掲載していますが、随時来てくれたゲストの皆さんも追加していこうと思っています。</p>
      </div>

        <section className={styles.mainpersonality}></section>
        <section className={styles.guests}></section>

      </main>
      <Footer />
      </>
  )
}

export default Members
