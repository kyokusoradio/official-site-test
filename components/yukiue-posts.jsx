import styles from "styles/yukiue-blog-content.module.css"
import { getYukiueBlog } from "lib/api.js";

import Link from "next/link"
import { Text } from "../pages/yukiue-blog/[slug]";

export default function YukiueBlogPosts({ posts }) {
  return (
    <ol className={styles.newsList}>
      {posts.map((post) => {
        const date = new Date(post.last_edited_time).toLocaleDateString();
        return (
          <li key={post.id} className={styles.newsCard}>
            <Link href={`/yukiue-blog/${post.properties.slug.title}`}>
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