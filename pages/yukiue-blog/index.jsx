import Head from "next/head";
import Link from "next/link";
import { getYukiueBlog } from "lib/api";
import { Text } from "./[id]";

import { NextPage } from 'next'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/news-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import YukiuePosts from "components/yukiue-posts"
import Footer from "components/footer"

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <main className={styles.contents}>
        <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>News</h1>
        <p className={styles.titleBox__subtitle}>大切な皆さんへ たまに大切なお知らせがあります</p>
      </div>

        <h2 className={styles.listTitle}>ブログ一覧</h2>
        <YukiuePosts posts={posts} />
      </main>
      <Footer />
    </>
            
  );
}

export async function getStaticProps() {
  const posts = await getYukiueBlog()

  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
}