import React from "react";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { useBlogPreviewBody } from "./hooks";
import { BlogPreviewBodyPresentation } from "./presentations";
import BlogPreviewBodySkelton from "./presentations/Skelton";

type Props = {
  notionPageId?: string;
};

export const BlogPreviewBody: React.FC<Props> = ({ notionPageId }) => {
  const { loading, notionId, blocks, pageInfo } = useBlogPreviewBody(notionPageId);
  return (
    <div>
      {loading ? (
        <BlogPreviewBodySkelton />
      ) : !notionId || !blocks || !pageInfo ? (
        <></>
      ) : (
        <BlogPreviewBodyPresentation
          id={notionId as string}
          blocks={blocks as Block[]}
          pageInfo={pageInfo as PageInfo}
        />
      )}
    </div>
  );
};
