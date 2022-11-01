import { NextPage } from 'next'
import Meta from "components/meta"
import Image from 'next/image'
import styles from 'styles/blogs-page.module.css'
import Link from 'next/link'

import { getYukiueBlog, getSugiokaBlog } from 'lib/api'
import { YukiuePostsForBlogsPage } from "components/yukiue-posts"
import { SugiokaPostsForBlogsPage } from 'components/sugioka-posts'

import Header from "components/header"
import Toppage from "components/top-page"
import { BlogsTop } from "components/animation/blogs-top"
import LinksSection from "components/links-section"
import Footer from "components/footer"

export default function  Blogs ({ yukiuePosts, sugiokaPosts }) {
  return (
    <>
      <Meta pageTitle="ブログとリンク"/>
      <Header />
      <main className={styles.contents}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleBox__title}>Blogs</h1>
        <p className={styles.titleBox__subtitle}>より深くぼくらの頭の中が見たいなら</p>
      </div>
      <div className={styles.imageFrame}>
        <BlogsTop />
      </div>

      <div className={styles.texts}>
          <p className={styles.text}>
            ポッドキャストでは話しきれなかった話題を掘り下げたり、より各々の趣味嗜好に寄ったニッチな内容をお届けしていく予定です。
          </p>
          <p className={styles.text}>
            配信時期等は未定ですが、更新次第次第SNSで告知していきます。
          </p>
      </div>

        <section className={styles.yukiueBlog}>
          <h2 className={styles.yukiueBlog__title}>Yukiue's blog</h2>
          <p className={styles.yukiueBlog__subtitle}>ゆきうえのデザイン日記（仮）</p>
          <YukiuePostsForBlogsPage posts={yukiuePosts} />
          <div className={styles.linkToBlogList}>
            <Link href='/yukiue-blog/' >
              <a>他の記事も読む</a>
          </Link>
          </div>
        </section>


        <section className={styles.sugiokaBlog}>
          <h2 className={styles.yukiueBlog__title}>Sugioka's blog</h2>
          <p className={styles.yukiueBlog__subtitle}>スギちゃんのオールナイトドリーマー（仮）</p>
          <SugiokaPostsForBlogsPage posts={sugiokaPosts} />
          <div className={styles.linkToBlogList}>
            <Link href='/sugioka-blog/' >
              <a>他の記事も読む</a>
            </Link>
          </div>
        </section>

      </main>
      <LinksSection />
      <Footer />
      </>
  )
}




export async function getStaticProps() {
  const yukiuePosts = await getYukiueBlog(3)
  const sugiokaPosts = await getSugiokaBlog(3)

  return {
    props: {
      yukiuePosts: yukiuePosts,
      sugiokaPosts: sugiokaPosts,
    },
    revalidate: 30,
  };
}