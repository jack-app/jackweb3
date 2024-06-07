import { useEffect, useState } from "react";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";

export const useBlogPreviewBody = (notionId?: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);

  useEffect(() => {
    if (!notionId) return;
    setLoading(true);
    fetch("/api/notion/getBlocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: notionId }),
    })
      .then(async (res) => {
        if (res.status !== 200) {
          throw new Error("notion api error");
        }
        const data = await res.json();
        setBlocks(data.blocks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("notion api error", err);
        console.error(err);
        setLoading(false);
      });
    return () => {
      setBlocks(null);
    };
  }, [notionId]);

  useEffect(() => {
    if (!notionId) return;
    setLoading(true);
    fetch("/api/notion/getPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageId: notionId }),
    })
      .then(async (res) => {
        if (res.status !== 200) {
          throw new Error("notion api error");
        }
        const data = await res.json();
        setPageInfo(data.pageInfo as PageInfo);
        setLoading(false);
      })
      .catch((err) => {
        console.error("notion api error", err);
        console.error(err);
        setLoading(false);
      });
    return () => {
      setPageInfo(null);
    };
  }, [notionId]);

  return { loading, notionId, blocks, pageInfo };
};
