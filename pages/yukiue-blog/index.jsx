import Meta from "components/meta"
import Link from "next/link";
import { getYukiueBlog } from "lib/api";
import { Text } from "./[id]";

import { NextPage } from 'next'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/blog-list-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import YukiuePosts from "components/yukiue-posts"
import Footer from "components/footer"

export const databaseId = process.env.YUKIUE_BLOG_ID;

export default function Home({ posts }) {
  return (
    <>
      <Meta
        pageTitle="ゆきうえのデザイン日記（仮）"
      />
      <Header />
      <main className={styles.contents}>
        <div className={styles.titleBox}>
          <h1 className={styles.titleBox__title}>
            <span className={styles.titleTop}>Yukiue's</span><br />
            <span className={styles.titleBottom}>Contents</span>
          </h1>
        <p className={styles.titleBox__subtitle}>ゆきうえのデザイン日記（仮）</p>
      </div>

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