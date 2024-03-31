import React from "react";
import { Props as ArticleItemProps, ArticleItem } from "@/ui/ArticleItem";

type Props = {
  articles: ArticleItemProps[];
  tag?: string;
  writer?: string;
};

/*
 * @Props articles: 記事一覧, tag: タグ, writer: 作者名
 * tagとwriterは同時には渡されない。
 **/

export const ArticleListPresentation: React.FC<Props> = ({ articles, tag, writer }) => {
  return (
    <div className="flex flex-col items-center gap-60 md:gap-80">
      {tag && <h1 className="px-40">{tag}に関する記事一覧</h1>}
      {writer && <h1 className="px-40">{writer}による記事一覧</h1>}
      <div className="grid max-w-[744px] justify-center gap-50 md:grid-cols-2 md:gap-x-60 md:gap-y-70">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
