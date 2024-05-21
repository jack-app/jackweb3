import React, { Fragment } from "react";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { ArticleTitle } from "@/ui/ArticleTitle";
import { renderBlock } from "./hooks/renderBlock";
import { BlogArticleBodyWrapper } from "./presentations/";

type Props = {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
};

export const BlogArticleBodies: React.FC<Props> = ({ id, blocks, pageInfo }) => {
  return (
    <BlogArticleBodyWrapper>
      <ArticleTitle {...pageInfo} />
      {blocks.map((block: Block) => (
        <Fragment key={block.id}>{renderBlock(block, id)}</Fragment>
      ))}
    </BlogArticleBodyWrapper>
  );
};
