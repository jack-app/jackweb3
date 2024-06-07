import { NextApiRequest, NextApiResponse } from "next";
import { Block } from "@/types/block";
import { getBlocks as notionGetBlocks } from "@/utils/notion";

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    id: string;
  };
}

interface ResponseType {
  pageId?: string;
  blocks?: Block[];
  error?: string;
}

export default async function getBlocks(
  req: ExtendNextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  try {
    const blocks = await notionGetBlocks(req.body.id);
    res.status(200).json({ pageId: req.body.id, blocks: blocks });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
