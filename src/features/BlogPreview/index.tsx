import React from "react";
import { useBlogPreview } from "./hooks";
import { BlogPreviewPresentation } from "./presentations";

type Props = {
  id?: string;
};

export const BlogPreview: React.FC<Props> = ({ id }) => {
  const {
    loading,
    notionId,
    blocks,
    pageInfo,
    inputNotionURL,
    notionPageId,
    showPreviewFromNotionURL,
    setInputNotionURL,
    reloadPreview,
  } = useBlogPreview({ notionId: id });
  return (
    <BlogPreviewPresentation
      loading={loading}
      notionId={notionId}
      blocks={blocks}
      pageInfo={pageInfo}
      notionPageId={notionPageId}
      inputNotionURL={inputNotionURL}
      showPreviewFromNotionURL={showPreviewFromNotionURL}
      setInputNotionURL={setInputNotionURL}
      reloadPreview={reloadPreview}
    />
  );
};
