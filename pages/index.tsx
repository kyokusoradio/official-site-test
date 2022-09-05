import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "components/header"
import Footer from "components/footer"

const Home: NextPage = () => {
  return (
      <div>
          <Header />
          <Footer />
      </div>
  )
}

export default Home
