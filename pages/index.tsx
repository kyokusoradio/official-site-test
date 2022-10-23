import type { NextPage } from 'next'
import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import newsStyles from "styles/news-section.module.css"

import {getNewsData} from "lib/api"

import Header from "components/header"
import Toppage from "components/top-page"
import HeroSection from "components/hero-section"
import AboutSection from "components/about-section"
import MemberSection from "components/member-section"
import EpisodeSection from "components/episode-section"
import LinksSection from "components/links-section"
import Footer from "components/footer"

import NewsPosts from "components/news-posts"

const Home: NextPage = ({ posts }) => {
  return (
      <>
      <Header />
      <HeroSection />
      <AboutSection />
      <section className={newsStyles.newsContainer}>
        <h2 className={newsStyles.newsTitle}>
          <span className={newsStyles.newsTitle__main}>News</span><br></br>
          <span className={newsStyles.newsTitle__sub}>お知らせ</span>
        </h2>
        <NewsPosts posts={posts} />
        <div className={newsStyles.linkToNewsPage}>
          <Link href='/news/'>
            <a>お知らせ一覧へ</a>
          </Link>
        </div>
      </section>
      <MemberSection />
      <EpisodeSection />
      <LinksSection />
      <Footer />
      </>
  )
}

export default Home


export async function getStaticProps() {
  const posts = await getNewsData(2) 
  return {
    props: {
      posts: posts,
    },
  }
}