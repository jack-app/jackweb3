import { url } from "inspector";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useBlogPreviewUsage = (
  InitNotionId: string,
  showPreview: (id: string) => void,
  showPreviewAndSyncQueryParam: (id: string) => void,
) => {
  const [inputNotionURL, setInputNotionURL] = useState<string>(
    `https://www.notion.so/${InitNotionId}`,
  );

  const searchParam = useSearchParams();
  // const pathName = usePathname();

  useEffect(() => {
    // クエリパラメータからnotionPageIdを取得
    const params = new URLSearchParams(searchParam);
    if (params.has("id")) {
      const id = params.get("id") as string;
      setInputNotionURL(`https://www.notion.so/${id}`);
      showPreview(id);
    }
  }, [searchParam, showPreview]);

  const showPreviewFromNotionURL = () => {
    if (!inputNotionURL) return;
    const urlWithoutQuery = inputNotionURL.split("?")[0];
    // "-"で分割して最後の文字列を取得
    const segments = urlWithoutQuery.split("-");
    const id = segments[segments.length - 1];
    showPreviewAndSyncQueryParam(id);
  };

  return { inputNotionURL, setInputNotionURL, showPreviewFromNotionURL };
};
