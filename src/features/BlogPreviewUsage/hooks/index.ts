import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useBlogPreviewUsage = (InitNotionId: string, showPreview: (id: string) => void) => {
  const [pageId, setPageId] = useState<string>(InitNotionId);

  const searchParam = useSearchParams();
  // const pathName = usePathname();

  useEffect(() => {
    // クエリパラメータからnotionPageIdを取得
    const params = new URLSearchParams(searchParam);
    if (params.has("id")) {
      const id = params.get("id") as string;
      setPageId(id);
      showPreview(id);
    }
  }, [searchParam, showPreview]);

  return { pageId, setPageId };
};
