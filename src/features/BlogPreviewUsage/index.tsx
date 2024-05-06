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
  const { inputNotionURL, setInputNotionURL, showPreviewFromNotionURL } = useBlogPreviewUsage(
    notionPageId,
    showPreview,
    showPreviewAndSyncQueryParam,
  );
  return (
    <BlogPreviewUsagePresentation
      inputNotionURL={inputNotionURL}
      setInputNotionURL={setInputNotionURL}
      showPreviewFromNotionURL={showPreviewFromNotionURL}
    />
  );
};
