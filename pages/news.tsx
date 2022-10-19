import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/news-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import { NewsTop } from "components/animation/news-top"
import Footer from "components/footer"

const News: NextPage = () => {
  return (
      <>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>News</h1>
        <p className={styles.titleBox__subtitle}>大切な皆さんへ たまに大切なお知らせ</p>
      </div>
      <div className={styles.imageFrame}>
        <NewsTop />
      </div>

      </main>
      <Footer />
      </>
  )
}

export default News
