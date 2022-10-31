import styles from "styles/yukiue-blog-content.module.css"
import { getSugiokaBlog } from "lib/api";

import Link from "next/link"
import { Text } from "../pages/sugioka-blog/[id].js";

export default function SugiokaPosts({ posts }) {
  return (
    <ol className={styles.blogList}>
      {posts.map((post) => {
        const date = new Date(post.properties.date.date.start).toLocaleDateString();
        // const slug = post.properties.slug.rich_text[0].plain_text
        console.log(`~~~~~~~~~~~~~~~~~~~~~~`)
        const textStringify = JSON.stringify(post);
        // console.log(`post: ${textStringify}`)
        // const aStringify = JSON.stringify(post.properties.image.files[0].file.url);
        console.log(`post.properties.image.files: ${post.properties.image.files.length}`)
        const src =
          post.properties.image.files.length === 0 ? 'sugioka_blog_image-default.svg' :
            post.properties.image.files.type === "external" ? post.properties.image.files[0].external.url : post.properties.image.files[0].file.url;
        // console.log(`~~src: ${src}`)


        return (
          <li key={post.properties.slug.rich_text.text} className={styles.blogCard}>
            <Link href={`/y-blog/${post.id}`}>
              <a className={styles.blogContainer}>
                <figure className={styles.blogImage}>
                  <img src={src} alt='' />
                </figure>
                <div className={styles.blogText}>
                  <p className={styles.blogData}>{date}</p>
                  <h3 className={styles.blogTitle}>
                    <Text text={post.properties.title.title} />
                  </h3>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
      </ol>
  )
}






export function SugiokaPostsForBlogsPage({ posts }) {
  return (
    <>
      <p className={styles.listTitle}>最近の投稿</p>
      <ol className={styles.blogList}>
      {posts.map((post) => {
        const date = new Date(post.properties.date.date.start).toLocaleDateString();
        // const slug = post.properties.slug.rich_text[0].plain_text
        // console.log(`~~~~~~~~~~~~~~~~~~~~~~`)
        // const textStringify = JSON.stringify(post);
        // console.log(`post: ${textStringify}`)
        // // const aStringify = JSON.stringify(post.properties.image.files[0].file.url);
        // console.log(`post.properties.image.files: ${post.properties.image.files.length}`)
        const src =
          post.properties.image.files.length === 0 ? 'sugioka_blog_image-default.svg' :
            post.properties.image.files.type === "external" ? post.properties.image.files[0].external.url : post.properties.image.files[0].file.url;
        // console.log(`~~src: ${src}`)


        return (
          <li key={post.properties.slug.rich_text.text} className={styles.blogCard}>
            <Link href={`/sugioka-blog/${post.id}`}>
              <a className={styles.postsContainer}>
                <figure className={styles.postsImage}>
                  <img src={src} alt='' />
                </figure>
                <div className={styles.postsText}>
                  <p className={styles.postsData}>{date}</p>
                  <h3 className={styles.postsTitle}>
                    <Text text={post.properties.title.title} />
                  </h3>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
    </>
    
  )
}
