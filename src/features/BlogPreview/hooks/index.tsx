import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { Props as BlogPreviewPresentationProps } from "../presentations";

type Props = {
  notionId?: string;
};

export const useBlogPreview = ({ notionId }: Props) => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [notionPageId, setNotionPageId] = useState<string>(notionId || "");

  const [loading, setLoading] = useState<boolean>(false);
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [inputNotionURL, setInputNotionURL] = useState<string>(
    notionId ? `https://www.notion.so/${notionId}` : "",
  );

  // check if notionId exist in query param
  // if notionId exists, fetch /api/notion/getPreview and show preview
  useEffect(() => {
    if (!notionId) return;
    setLoading(true);
    fetch("/api/notion/getPreview", {
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
        setBlocks(data.blocks as Block[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert(`記事の取得に失敗しました。https://www.notion.so/${notionId}`);
      });
    return () => {
      setPageInfo(null);
      setBlocks(null);
      setLoading(false);
    };
  }, []);

  // Hanlder of Reloading Preview
  const showPreview = async () => {
    // get notionId from query param
    if (!inputNotionURL) return;
    if (inputNotionURL.indexOf("https://www.notion.so/") === -1) {
      console.error("Invalid URL");
      alert(`Invalid URL: ${inputNotionURL}`);
      return;
    }
    let urlWithoutNotion = inputNotionURL.replace("https://www.notion.so/", "");
    if (urlWithoutNotion.includes("?")) {
      urlWithoutNotion = urlWithoutNotion.split("?")[0];
    }
    // "-"で分割して最後の文字列を取得
    const segments = urlWithoutNotion.split("-");
    const id = segments[segments.length - 1];

    // urlのクエリパラメータを更新
    const params = new URLSearchParams(searchParam);
    if (params.has("id")) {
      params.set("id", id);
    } else {
      params.append("id", id);
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });

    // fetch /api/notion/getPreview
    setLoading(true);
    fetch("/api/notion/getPreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageId: id }),
    })
      .then(async (res) => {
        if (res.status !== 200) {
          throw new Error("notion api error");
        }
        const data = await res.json();
        // return data;
        setPageInfo(data.pageInfo as PageInfo);
        setBlocks(data.blocks as Block[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setPageInfo(null);
        setBlocks(null);
        setLoading(false);
        alert(`記事の取得に失敗しました。https://www.notion.so/${id}`);
        return;
      });
    return () => {
      setPageInfo(null);
      setBlocks(null);
      setLoading(false);
    };
  };

  return {
    loading: loading,
    notionId: notionId,
    blocks: blocks,
    pageInfo: pageInfo,
    inputNotionURL: inputNotionURL,
    notionPageId: notionPageId,
    setInputNotionURL: setInputNotionURL,
    showPreview: showPreview,
  } as BlogPreviewPresentationProps;
};
