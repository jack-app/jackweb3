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
      
      {/* 「丸に数字」のボタンを配置 (例:1) map()使いたい*/}
      
        <button
          key={1}
          className={selectedIndex === 1 ? styles.circleSelected : styles.circle}
          onClick={() => onPageChange(1)}
        >
          <p
            className={selectedIndex === 1 ? styles.numberTextSelected : styles.numberText}
          >
            1
          </p>
        </button>
        
     
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


// let pageIndex = 1; // 現在のページインデックス

// const PagenationButton: React.FC<{ text: string; index: number; active: boolean; icon?: IconType }> = ({ text, index, active, icon: Icon }) => {
//   return (
//     <button className={`${styles.pagenationCircle} ${active ? styles.active : "h3"}`}>
//       <span className={styles.text}>{text}</span>
//       {Icon && <Icon className={styles.icon} width={24} height={24} />}
//     </button>
//   );
// }


export const BlogScreen: React.FC<Props> = ({ articles, headingText }) => {
  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.wrapper}>
        <Heading2 text={headingText} />
        <div className={styles.articlesWrapper}>
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
        <div>
            {/* ここにページネーションのコンポーネントを追加 */}
            {/* もしかしたらそれぞれを配置するコンポーネントがいるかもね */}
            <div className={styles.pagenationWrapper}>
              <PaginationButton selectedIndex={1} totalPages={5} onPrev={() => {}} onNext={() => {}} onPageChange={() => {}} />
            </div>
        </div>
      </div>
    </main>
  );
};
