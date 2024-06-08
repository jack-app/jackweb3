import { TagType } from "@/ui/Tag";
import { getDatabase } from "./notion";

type GetAllTags = () => Promise<TagType[]>;

export const getAllTags: GetAllTags = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const tagsList = new Set<string>();
  const tags: TagType[] = [];

  articleDb.forEach((article: any) => {
    article.properties.tag.multi_select.forEach((tag: any) => {
      if (!tagsList.has(tag.name)) {
        tagsList.add(tag.name);
        tags.push({
          id: tag.id,
          name: tag.name,
          color: tag.color,
        });
      }
    });
  });

  return tags;
};
