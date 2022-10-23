import styles from "styles/news-section.module.css"

import Link from "next/link"
import NewsPosts from "components/news-posts"

export default function NewsSection({posts}) {
  return (
    <section className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>
          <span className={styles.newsTitle__main}>News</span><br></br>
          <span className={styles.newsTitle__sub}>お知らせ</span>
      </h2>
      <NewsPosts posts={posts} />
        <div className={styles.linkToNewsPage}>
          <Link href='/news/'>
            <a>お知らせ一覧へ</a>
          </Link>
        </div>
      </section>
  )
}