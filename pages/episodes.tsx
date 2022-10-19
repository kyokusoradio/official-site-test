import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/episodes-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import Footer from "components/footer"

const Episodes: NextPage = () => {
  return (
      <>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Episodes</h1>
        <p className={styles.titleBox__subtitle}>現在進行形の黒歴史たち</p>
      </div>

      </main>
      <Footer />
      </>
  )
}

export default Episodes
