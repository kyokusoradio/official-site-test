import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/blogs-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import {BlogsTop} from "components/animation/blogs-top"
import Footer from "components/footer"

const Blogs: NextPage = () => {
  return (
      <>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Blogs</h1>
        <p className={styles.titleBox__subtitle}>より深く彼らの頭の中がみたいならどうぞ</p>
      </div>
      <div className={styles.imageFrame}>
        <BlogsTop />
      </div>

      <div className={styles.texts}>
          <p className={styles.text}>
            ポッドキャストでは話しきれなかった話題を掘り下げたり、より各々の趣味嗜好に寄ったニッチな内容をお届けしていく予定です。
          </p>
          <p className={styles.text}>
            配信時期等は未定ですが、更新次第次第SNSで告知していきます。
          </p>
      </div>

        <section className={styles.mainpersonality}></section>
        <section className={styles.guests}></section>

      </main>
      <Footer />
      </>
  )
}

export default Blogs
