import React, { Fragment } from "react";
import { Block } from "@/types/block";
import { renderBlock } from "./hooks/renderBlock";
import { BlogArticleBodyWrapper } from "./presentations/";

type Props = {
  id: string;
  blocks: Block[];
};

export const BlogArticleBodies: React.FC<Props> = ({ id, blocks }) => {
  return (
    <BlogArticleBodyWrapper>
      {blocks.map((block: Block) => (
        <Fragment key={block.id}>{renderBlock(block, id)}</Fragment>
      ))}
    </BlogArticleBodyWrapper>
  );
};
