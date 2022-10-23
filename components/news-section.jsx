import styles from "styles/news-section.module.css"
import { getNewsData } from "lib/api.js";

import Link from "next/link"
import { Text } from "../pages/news/[id].js";

export default function NewsPosts({ posts }) {
  return (
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
  )
}