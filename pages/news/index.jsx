import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "lib/api";
import { Text } from "./[id].js";

import { NextPage } from 'next'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/news-page.module.css'

import Header from "components/header"
import Toppage from "components/top-page"
import { NewsTop } from "components/animation/news-top"
import Footer from "components/footer"

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <main className={styles.contents}>
        <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>News</h1>
        <p className={styles.titleBox__subtitle}>大切な皆さんへ たまに大切なお知らせ</p>
      </div>
      <div className={styles.imageFrame}>
        <NewsTop />
      </div>

        <h2 className={styles.listTitle}>お知らせ一覧</h2>

        <ol className={styles.newsList}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleDateString();
            return (
              <li key={post.id} className={styles.NewsCard}>
                <Link href={`/news/${post.id}`}>
                  <a className={styles.newsContainer}>
                    <div className={styles.newsText}>
                      <p className={styles.newsData}>{date}</p>
                      <h3 className={styles.newsTitle}>
                        <Text text={post.properties.title.title} />
                      </h3>
                    </div>
                    <img className={styles.newsArrow} src="../images/arrow.svg"></img>
                  </a>
                  </Link>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </>
            
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
