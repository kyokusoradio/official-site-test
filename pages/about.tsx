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
      <div className
      <Footer />
      </>
  )
}

export default About
