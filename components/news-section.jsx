import Link from "next/link";
import { getNewsDatabase } from "../lib/api";

import styles from "styles/news-section.module.css"

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function NewsSection({ posts }) {
  console.log(`posts: ${posts}`)
  return (
    <div>
      <main className={styles.container}>
        <ol className={styles.posts}>
          {/* {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })} */}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getNewsDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};
