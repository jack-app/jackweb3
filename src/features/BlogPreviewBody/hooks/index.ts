import { useEffect, useState } from "react";
import { Block } from "@/types/block";

export const useBlogPreviewBody = (notionId?: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blocks, setBlocks] = useState<Block[]>([]);

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
        const data = await res.json();
        setBlocks(data.blocks);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    return () => {
      setBlocks([]);
    };
  }, [notionId]);

  return { loading, notionId, blocks };
};
