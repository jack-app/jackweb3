import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { Block } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
};

export const BlogArticleScreen: React.FC<Props> = ({ id, blocks }) => {
  return (
    <div>
      <BlogArticleBodies id={id} blocks={blocks} />
    </div>
  );
};
