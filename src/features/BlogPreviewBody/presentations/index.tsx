import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";

import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
};

export const BlogPreviewBodyPresentation: React.FC<Props> = ({ id, blocks, pageInfo }) => {
  return (
    <div>
      <BlogArticleBodies id={id} blocks={blocks} pageInfo={pageInfo} />
    </div>
  );
};
