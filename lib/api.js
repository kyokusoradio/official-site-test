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

export async function getNewsData() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'last_edited',
          direction: 'descending',
        },
      ],
    })
    return response.results;
  } catch (err) {
    console.log(`~~getNewsData~~`);
    console.log(err)
  }
}

export const getNewsDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'publish',
          checkbox: {
            equals: true,
          },
        }],
    }
  });
  return response.results;
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

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
