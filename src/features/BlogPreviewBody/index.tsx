import React from "react";
import { useBlogPreviewBody } from "./hooks";
import { BlogPreviewBodyPresentation } from "./presentations";
import BlogPreviewBodySkelton from "./presentations/Skelton";

type Props = {
  notionPageId?: string;
};

export const BlogPreviewBody: React.FC<Props> = ({ notionPageId }) => {
  const { loading, notionId, blocks } = useBlogPreviewBody(notionPageId);
  return (
    <div>
      {loading ? (
        <BlogPreviewBodySkelton />
      ) : !notionId ? (
        <></>
      ) : (
        <BlogPreviewBodyPresentation id={notionId as string} blocks={blocks} />
      )}
    </div>
  );
};
