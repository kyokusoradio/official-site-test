import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Client}from"@notionhq/client"
import styles from 'styles/news-page.module.css'
import Link from 'next/link'

import Header from "components/header"
import Toppage from "components/top-page"
import { NewsTop } from "components/animation/news-top"
import Footer from "components/footer"

type Help={
  title:string;
  date:string;
  tags: string;
  // URL: string;
}

export async function getStaticProps() {
  const apidatabaseId = process.env.NOTION_DATABASE_ID;
  const apinotion = new Client({ auth: process.env.NOTION_TOKEN });

  const data = await apinotion.databases.query({
    database_id: apidatabaseId || "",
    sorts: [{
      property: 'date',
      direction: 'descending',
    },],
  });


  const helpList: Help[]=data.results.map((_:any)=>_.properties).map(prop=>{
    return {
      date: prop.date.date.start,
      title: prop.title.title[0].plain_text,
      tags: prop.tags.select.name,
      // URL: _.URL.url,
    };
    
  });


  return {
    props: { helpList },
    revalidate: 30,
  };
}



type Props={
  helpList:Help[];
};

const News = ({helpList}: Props) => {
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

        <div className={styles.newsList}>
          {helpList.map((_)=>(
          <div className={styles.NewsCard} key={_.title}>
              <Link href="" passHref>
                <a className={styles.newsContainer}>
                  <div className={styles.newsText}>
                    <p className={styles.newsData}>{_.date}</p>
                  <h3 className={styles.newsTitle}> {_.title}</h3>
                  </div>
                  <img className={styles.newsArrow} src="./images/arrow.svg"></img>
                </a>
              </Link>
              <hr />
          </div>
          ))}
        </div>

      </main>
      <Footer />
      </>
  )
}

export default News
