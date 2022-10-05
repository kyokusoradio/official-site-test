import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import Footer from "components/footer"

const About: NextPage = () => {
  return (
      <>
      <Header />
      <Footer />
      </>
  )
}

export default About
