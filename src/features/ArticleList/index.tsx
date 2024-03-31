import React from "react";
import { useGetArticles } from "@/utils/useGetArticles";
import { ArticleListPresentation } from "./presentations/";

type Props = {
  tag?: string;
  writer?: string;
};

export const ArticleList: React.FC<Props> = async ({ tag, writer }) => {
  const articles = await useGetArticles(tag, writer);
  return <ArticleListPresentation articles={articles} tag={tag} writer={writer} />;
};
