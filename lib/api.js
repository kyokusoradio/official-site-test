import { Client } from "@notionhq/client";
import { databaseId } from "components/news-section";

const notion = new Client({
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

export async function getYukiueBlog() {
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
    })
    return response.results;
  } catch (err) {
    console.log(`~~getYukiueBlog~~`);
    console.log(err)
  }
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(`pageid: ${response.object}`);
  return response;
};

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  console.log(`blocks: ${blocks}, cursor: ${cursor}`);
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
  console.log(`blocks: ${blocks}`);
  return blocks;
};
