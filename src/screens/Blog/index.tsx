import React from "react";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import styles from "./index.module.scss";
import { IconLink } from "@/ui/IconLink";
//import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IconType } from "react-icons";
import { text } from "stream/consumers";

type Props = {
  articles: ArticleItemProps[];
  headingText: string;
};

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export const PaginationButton = ({
  selectedIndex,
  totalPages,
  onPrev,
  onNext,
  onPageChange,
}: {
  selectedIndex: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPageChange: (index: number) => void;
}) => {

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const prevButtonDisable = selectedIndex === 1;
  const nextButtonDisable = selectedIndex === totalPages;

  return (
    <div className={styles.paginationButtonsWrapper}>

      {/* 「前へ」のボタンを配置 */}
      <button
        className={prevButtonDisable ? styles.disabled : ""}
        onClick={onPrev}
        disabled={prevButtonDisable}
      >
        <SlArrowLeft />
      </button>

      {/* 「丸に数字」のボタンを配置 (例:1),mapで並べる*/}
      {pages.map((page) => (
        <button
          key={page}
          className={selectedIndex === page ? styles.circleSelected : styles.circle}
          onClick={() => onPageChange(page)}
        >
          <p
            className={
              selectedIndex === page ? styles.numberTextSelected : styles.numberText
            }
          >
            {page}
          </p>
        </button>
      ))}


      {/* 「次へ」のボタンを配置 */}
      <button
        className={nextButtonDisable ? styles.disabled : ""}
        onClick={onNext}
        disabled={nextButtonDisable}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};


export const BlogScreen: React.FC<Props> = ({ articles, headingText }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const ARTICLES_PER_PAGE = 30;
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.wrapper}>
        <Heading2 text={headingText} />
        <div className={styles.articlesWrapper}>
          {articles.slice((selectedIndex - 1) * ARTICLES_PER_PAGE, selectedIndex * ARTICLES_PER_PAGE).map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
        <div>
          <div className={styles.pagenationWrapper}>
            <PaginationButton
              selectedIndex={selectedIndex}
              totalPages={totalPages}
              onPrev={() => setSelectedIndex((prev) => Math.max(1, prev - 1))}
              onNext={() => setSelectedIndex((prev) => Math.min(totalPages, prev + 1))}
              onPageChange={(page) => setSelectedIndex(page)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
