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
  tags:string;
}

export async function getStaticProps() {
  const apitoken = 'secret_wJF6vfpZ5AZukYvaPGRRZMWdIb1wecRHN1MBiw8YmAT';
  const apidatabaseId = "46081c22b2cd4751b2aa3e093f99aef6";
  const apinotion = new Client({ auth: apitoken });

  const data = await apinotion.databases.query({
    database_id: apidatabaseId,
    sorts: [{
      property: 'date',
      direction: 'descending',
    },],
  });

    const helpList: Help[]=data.results.map((_:any)=>_.properties).map(_=>{
    return{
      date: _.date.date.start,
      title: _.title.title[0].plain_text,
      tags: _.tags.select.name
    };
  });

  return {props:{helpList},revalidate:30};
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

        <h3>気になるcardをクリックすると記事へ飛べるよー</h3>
        <div className={styles.grid}>
          {helpList.map((_)=>(
          <div className={styles.card} key={_.title}>
            <h3>{_.date}</h3>
            <Link href='' passHref><p> {_.title}</p></Link>
            <hr/>
          </div>
          ))}
        </div>

      </main>
      <Footer />
      </>
  )
}

export default News
