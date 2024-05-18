import React from "react";
import { Props as ArticleItemProps, ArticleItem } from "@/ui/ArticleItem";
import { SuggestArticleListPresentation } from "./presentations/";

type Props = {
  articles: ArticleItemProps[];
};

export const SuggestArticleList: React.FC<Props> = ({ articles }) => {
  return <SuggestArticleListPresentation articles={articles} />;
};
