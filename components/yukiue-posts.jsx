import styles from "styles/yukiue-blog-content.module.css"
import { getYukiueBlog } from "lib/api";

import Link from "next/link"
import { Text } from "../pages/yukiue-blog/[id].js";

export default function YukiuePosts({ posts }) {
  return (
    <ol className={styles.blogList}>
      {posts.map((post) => {
        const date = new Date(post.properties.date.date.start).toLocaleDateString();
        const slug = post.properties.slug.rich_text[0].plain_text
        // console.log(`~~~~~~~~~~~~~~~~~~~~~~`)
        // const textStringify = JSON.stringify(post);
        // console.log(`post: ${textStringify}`)
        // // const aStringify = JSON.stringify(post.properties.image.files[0].file.url);
        // console.log(`post.properties.image.files: ${post.properties.image.files.length}`)
        const src =
          post.properties.image.files.length === 0 ? 'yukiue_blog_image-default.png' :
            post.properties.image.files.type === "external" ? post.properties.image.files[0].external.url : post.properties.image.files[0].file.url;
        // console.log(`~~src: ${src}`)


        return (
          <li key={post.properties.slug.rich_text.text} className={styles.blogCard}>
            <Link href={`/yukiue-blog/${post.id}`}>
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




// post: {
//   "object": "page",
//     "id": "089b2126-483e-453e-99dc-4dc9919feba6",
//     "created_time": "2022-10-23T07:50:00.000Z",
//     "last_edited_time": "2022-10-29T01:20:00.000Z",
//     "created_by": { "object": "user", "id": "2023eaaf-9fd1-4a7f-b8ff-1ddfa3248bc5" }, "last_edited_by": { "object": "user", "id": "2023eaaf-9fd1-4a7f-b8ff-1ddfa3248bc5" },
//   "cover": null,
//     "icon": null,
//     "parent": { "type": "database_id", "database_id": "73c19983-db2a-49b5-b746-ef12c69f2780" },
//   "archived": false,
//     "properties": { 
//       "image": {
//          "id": "%3C%5EBn", 
//          "type": "files", 
//          "files": [{ 
//         "name": "cube.jpg",
//            "type": "file",
//            "file": {
//              "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d534bc07-e300-4ff7-bf31-9ccbf9160ead/cube.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221030T111714Z&X-Amz-Expires=3600&X-Amz-Signature=93378d4e84a61af2a27ab9b2fc5449a5dcf06eb7327e5bb582946c4c69aab090&X-Amz-SignedHeaders=host&x-id=GetObject",
//              "expiry_time": "2022-10-30T12:17:14.704Z"
//            }
//       }]
//     },
//     "date": {
//       "id": "%60v%7D%5D", "type": "date",
//         "date": { "start": "2022-10-23", "end": null, "time_zone": null }
//     },
//     "tags": { "id": "%60x%7B%60", "type": "multi_select", "multi_select": [] },
//     "slug": {
//       "id": "b%60gl", "type": "rich_text", "rich_text": [{
//         "type": "text", "text": { "content": "coffee", "link": null },
//         "annotations": { "bold": false, "italic": false, "strikethrough": false, "underline": false, "code": false, "color": "default" }, "plain_text": "coffee", "href": null
//       }]
//     }, "publish": { "id": "kq%40%5B", "type": "checkbox", "checkbox": true },
//     "title": { "id": "title", "type": "title", "title": [{ "type": "text", "text": { "content": "テスト", "link": null }, "annotations": { "bold": false, "italic": false, "strikethrough": false, "underline": false, "code": false, "color": "default" }, "plain_text": "テスト", "href": null }] }
//   },
//   "url": "https://www.notion.so/089b2126483e453e99dc4dc9919feba6"
// }