import React from "react";
import { Block } from "@/types/block";
import { BlogArticleTocPresentation } from "./presentations/";

type Props = {
  blocks: Block[];
};

export const BlogArticleToc: React.FC<Props> = ({ blocks }) => {
  return <BlogArticleTocPresentation blocks={blocks} />;
};
