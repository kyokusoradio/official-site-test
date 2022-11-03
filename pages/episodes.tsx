import type { NextPage } from 'next'
import Meta from "components/meta"
import Image from 'next/image'
import styles from 'styles/episodes-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import Footer from "components/footer"

const Episodes: NextPage = () => {
  return (
    <>
      <Meta pageTitle="エピソード"pageDesc={undefined} pageImg={undefined} pageImgW={undefined} pageImgH={undefined} />
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Episodes</h1>
        <p className={styles.titleBox__subtitle}>現在進行形の黒歴史たち</p>
        </div>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div className="elfsight-app-4469befb-70ce-459f-b272-cccb78170775"></div>
      </main>
      <Footer />
      </>
  )
}

export default Episodes
