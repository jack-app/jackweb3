import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useBlogPreview = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [notionPageId, setNotionPageId] = useState<string>("");

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
  return {
    notionPageId: notionPageId,
    showPreview: setNotionPageId,
    showPreviewAndSyncQueryParam: showPreviewAndSyncQueryParam,
  };
};
