import { NextApiRequest, NextApiResponse } from "next";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { getPage as notionGetPage } from "@/utils/notion";
import { getBlocks as notionGetBlocks } from "@/utils/notion";

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    pageId: string;
  };
}

interface ResponseType {
  pageId?: string;
  blocks?: Block[];
  pageInfo?: PageInfo;
  error?: string;
}

export default async function getPage(
  req: ExtendNextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  try {
    const page = (await notionGetPage(req.body.pageId)) as any;
    const pageInfo = {
      title: page.properties.Name.title[0].plain_text,
      writerName: page.properties.Writer.created_by.name || null,
      writerImage: page.properties.Writer.created_by.avatar_url || null,
      tags: page.properties.tag.multi_select,
      date: page.properties.Publish_Date.date
        ? page.properties.Publish_Date.date.start
        : page.created_time.slice(0, 10),
    } as PageInfo;

    const blocks = await notionGetBlocks(req.body.pageId);

    res.status(200).json({ pageId: req.body.pageId, blocks: blocks, pageInfo: pageInfo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
