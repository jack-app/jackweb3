import React from "react";
import { useBlogPreviewUsage } from "./hooks";
import { BlogPreviewUsagePresentation } from "./presentations/";

type Props = {
  notionPageId: string;
  showPreview: (id: string) => void;
  showPreviewAndSyncQueryParam: (id: string) => void;
};
export const BlogPreviewUsage: React.FC<Props> = ({
  notionPageId,
  showPreview,
  showPreviewAndSyncQueryParam,
}) => {
  const { pageId, setPageId } = useBlogPreviewUsage(notionPageId, showPreview);
  return (
    <BlogPreviewUsagePresentation
      inputNotionPageId={pageId}
      setInputNotionPageId={setPageId}
      showPreviewAndSyncQueryParam={showPreviewAndSyncQueryParam}
    />
  );
};
