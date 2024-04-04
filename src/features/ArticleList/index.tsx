import React, { useEffect, useState } from "react";
import { getArticles } from "@/utils/useGetArticles";
import { ArticleListPresentation } from "./presentations/";

type Props = {
  articles: any;
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return <ArticleListPresentation articles={articles} />;
};
