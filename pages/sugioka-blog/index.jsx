import Meta from "components/meta"
import Link from "next/link";
import { getSugiokaBlog } from "lib/api";
import { Text } from "./[id]";

import { NextPage } from 'next'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/blog-list-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import SugiokaPosts from "components/sugioka-posts"
import Footer from "components/footer"

export const databaseId = process.env.SUGIOKA_BLOG_ID;

export default function Home({ posts }) {
  return (
    <>
      <Meta
        pageTitle="スギちゃんのオールナイトドリーマー（仮）"
      />
      <Header />
      <main className={styles.contents}>
        <div className={styles.titleBox}>
          <h1 className={styles.titleBox__title}>
            <span className={styles.titleTopSugioka}>Sugioka's</span><br />
            <span className={styles.titleBottom}>Contents</span>
          </h1>
        <p className={styles.titleBox__subtitle}>スギちゃんのオールナイトドリーマー（仮）</p>
      </div>

        <SugiokaPosts posts={posts} />
      </main>

      <div className={styles.linkToOtherBlog}>
        <Link href="/yukiue-blog/">
          <a>
            <img src="./images/blog-noline.svg"></img>
            <p>ゆきうえのブログへ</p>
          </a>
        </Link>
      </div>

      <Footer />
    </>
            
  );
}

export async function getStaticProps() {
  const posts = await getSugiokaBlog()

  return {
    props: {
      posts: posts,
    },
    revalidate: 30,
  };
}