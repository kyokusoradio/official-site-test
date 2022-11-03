import { Client } from "@notionhq/client";
import { databaseId } from "components/news-section";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export async function getNewsData(pageSize = 100) {
  try {
    const databaseId = process.env.NEWS_DATABASE_ID
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [{
          property: 'publish',
          checkbox: {
            equals: true,
          },
        }],
      },
      sorts: [
        {
          property: 'last_edited',
          direction: 'descending',
        },
      ],
      page_size: pageSize,
    })
    return response.results;
  } catch (err) {
    console.log(`~~getNewsData~~`);
    console.log(err)
  }
}

export async function getYukiueBlog(pageSize) {
  try {
    const databaseId = process.env.YUKIUE_BLOG_ID
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [{
          property: 'publish',
          checkbox: {
            equals: true,
          },
        }],
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
      page_size: pageSize,
    })
    return response.results;
  } catch (err) {
    console.log(`~~getYukiueBlog~~`);
    console.log(err)
  }
}

export async function getSugiokaBlog(pageSize) {
  try {
    const databaseId = process.env.SUGIOKA_BLOG_ID
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [{
          property: 'publish',
          checkbox: {
            equals: true,
          },
        }],
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
      page_size: pageSize,
    })
    return response.results;
  } catch (err) {
    console.log(`~~getSugiokaBlog~~`);
    console.log(err)
  }
}

export async function getRelatedPosts() {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
  } catch (err) {
    console.log(`~~getRelatedPosts~~`);
    console.log(err)
  }
}


export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  // console.log(response);
  return response;
};

export const getYukiRelPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return {
    relTitle: response.properties.title.title[0].plain_text,
    relDate: response.properties.date.date.start,
    relSrc: response.properties.image.files.length === 0 ? '/yukiue_blog_image-default.png' :
      response.properties.image.files.type === "external" ? response.properties.image.files[0].external.url : response.properties.image.files[0].file.url,
    relId: pageId,
  }
}

export const getSugiRelPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return {
    relTitle: response.properties.title.title[0].plain_text,
    relDate: response.properties.date.date.start,
    relSrc: response.properties.image.files.length === 0 ? '/sugioka_blog_image-default.svg' :
      response.properties.image.files.type === "external" ? response.properties.image.files[0].external.url : response.properties.image.files[0].file.url,
    relId: pageId,
  }
}

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
