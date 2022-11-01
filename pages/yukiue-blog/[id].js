import { Fragment } from "react";
import Meta from "components/meta"
import { getDatabase, getPage, getBlocks } from "lib/api";
import Link from "next/link";
import { databaseId } from "./index"
import styles from "styles/blog-detail.module.css";

import Header from "components/header";
import Footer from "components/footer";

export const Text = ({ text }) => {
  if (!text) {
    console.log(`text is null`)
    // console.log(text);
    return null;
  }
  // console.log(`text is not null`)
  // console.log(`text: ${text}`);
  // console.log(`text: ${text.annotations}`);
  // const textStringify = JSON.stringify(text);
  // console.log(`~~textStringfy: ${textStringify}`);
  return Object.values(text).map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    // const annoStringify = JSON.stringify(value.annotations);
    // console.log(`value.annotations: ${annoStringify}`)
    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return (
      <ol>
        {value.children.map((block) => renderBlock(block))}
      </ol>
    )
  }
  return (
    <ul>
      {value.children.map((block) => renderBlock(block))}
    </ul>
  )
}

const renderBlock = (block) => {
  // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  // console.log(typeof(block));
  // const blockStringify = JSON.stringify(block);
  // console.log(`blockStringify: ${blockStringify}`);
  const { type, id } = block;
  const value = block[type];
  // console.log(typeof(value));
  // const aryStringify = JSON.stringify(value);
  // console.log(`~~~aryStringify: ${aryStringify}`);
  // console.log(`block:  ${block}`);

  switch (type) {
    case "paragraph":
      // console.log(`block.id: ${block.id}`)
     return (
       <p>
         <Text text={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(`heading_2: ${block.heading_2.rich_text}`)
      return (
        <h2>
          <Text text={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(`heading_3: ${block.heading_3.rich_text}`)
      return (
        <h3>
          <Text text={block.heading_3.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li>
          <Text text={block.bulleted_list_item.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "numbered_list_item":
      return (
        <li>
          <Text text={block.numbered_list_item.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={block.to_do.checked} />{" "}
            <Text text={block.to_do.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={block.toggle.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{block.quote.rich_text.plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {block.code.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url
      return (
        <a href={ href } target="_brank" className={styles.bookmark}>
          { href }
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};


export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const src =
          page.properties.image.files.length === 0 ? '/yukiue_blog_image-default.png' :
            page.properties.image.files.type === "external" ? page.properties.image.files[0].external.url : page.properties.image.files[0].file.url;
  return (
    <div>
      <Meta
        pageTitle={page.properties.title.title[0].plain_text}
      />

      <Header />

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text text={page.properties.title.title} />
        </h1>
        <p className={styles.postsDate}>
          {page.properties.date.date.start}
        </p>

        <figure>
          <img src={src} alt="" className={styles.pageTopImage}/>
        </figure>
        

        <section className={styles.mainTexts}>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <div className={styles.backToListPage}>
            <Link href="/yukiue-blog/">
              <a className={styles.back}>ブログ一覧へ</a>
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  // console.log(`database: ${database}`)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);
  console.log(`getStatcProps => blocks: ${blocks}`)

  // Retrieve block children for nested ks (one level deep), for example toggle block[0]s
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      }),
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });
  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 30, //ISR...前回から何秒以内のアクセスを無視するか指定します。
  };
};
