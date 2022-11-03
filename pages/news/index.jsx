import Head from "next/head";
import Meta from "components/meta"
import Link from "next/link";
import { getDatabase, getNewsData } from "lib/api";
import { Text } from "./[id].js";

import { NextPage } from 'next'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/news-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import { NewsTop } from "components/animation/news-top"
import NewsPosts from "components/news-posts"
import Footer from "components/footer"

export const databaseId = process.env.NEWS_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <Meta pageTitle="お知らせ" />
      <Header />
      <main className={styles.contents}>
        <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>News</h1>
        <p className={styles.titleBox__subtitle}>大切な皆さんへ たまに大切なお知らせがあります</p>
      </div>
      <div className={styles.imageFrame}>
        <NewsTop />
      </div>

        <h2 className={styles.listTitle}>お知らせ一覧</h2>
        <NewsPosts posts={posts} />
      </main>
      <Footer />
    </>
            
  );
}

export async function getStaticProps() {
  const posts = await getNewsData()

  return {
    props: {
      posts: posts,
    },
    revalidate: 30,
  };
}