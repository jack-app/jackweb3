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
  const [inputNotionURL, setInputNotionURL] = useState<string>(`https://www.notion.so/${notionId}`);

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
    };
  }, [notionId]);

  const showPreviewAndSyncQueryParam = (id: string): void => {
    // notionPageIdを更新
    // クエリパラメータを更新
    setNotionPageId(id);
    const params = new URLSearchParams(searchParam);
    if (params.has("id")) {
      params.set("id", id);
    } else {
      params.append("id", id);
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const showPreviewFromNotionURL = () => {
    if (!inputNotionURL) return;
    if (inputNotionURL.indexOf("https://www.notion.so/") === -1) {
      console.error("Invalid URL");
      alert(`Invalid URL: ${inputNotionURL}`);
    }
    // inputNotionURLに含まれるhttps://www.notion.so/を削除
    let urlWithoutNotion = inputNotionURL.replace("https://www.notion.so/", "");
    if (urlWithoutNotion.includes("?")) {
      urlWithoutNotion = urlWithoutNotion.split("?")[0];
    }
    // "-"で分割して最後の文字列を取得
    const segments = urlWithoutNotion.split("-");
    const id = segments[segments.length - 1];
    showPreviewAndSyncQueryParam(id);
  };

  return {
    loading: loading,
    notionId: notionId,
    blocks: blocks,
    pageInfo: pageInfo,
    inputNotionURL: inputNotionURL,
    notionPageId: notionPageId,
    showPreviewFromNotionURL: showPreviewFromNotionURL,
    setInputNotionURL: setInputNotionURL,
  } as BlogPreviewPresentationProps;
};
