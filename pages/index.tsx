import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import {getNewsData} from "lib/api"

import Header from "components/header"
import Toppage from "components/top-page"
import HeroSection from "components/hero-section"
import AboutSection from "components/about-section"
import MemberSection from "components/member-section"
import EpisodeSection from "components/episode-section"
import LinksSection from "components/links-section"
import NewsPosts from "components/news-section"
import Footer from "components/footer"

const Home: NextPage = ({}) => {
  return (
      <>
      <Header />
      <HeroSection />
      <AboutSection />
      <MemberSection />
      <EpisodeSection />
      <LinksSection />
      <Footer />
      </>
  )
}

export default Home


export async function getStaticProps() {
  const posts = await getNewsData() 
  return {
    props: {
      posts: posts,
    },
  }
}