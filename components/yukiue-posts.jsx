import styles from "styles/yukiue-blog-content.module.css"
import { getYukiueBlog } from "lib/api";

import Link from "next/link"
import { Text } from "../pages/yukiue-blog/[id].js";

export default function YukiuePosts({ posts }) {
  return (
    <ol className={styles.newsList}>
      {posts.map((post) => {
        const date = new Date(post.properties.date.date.start).toLocaleDateString();
        const slug = post.properties.slug.rich_text[0].plain_text
        return (
          <li key={post.properties.slug.rich_text.text} className={styles.newsCard}>
            <Link href={`/yukiue-blog/${post.id}`}>
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