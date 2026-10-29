import React from "react";
import { useState, useEffect } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import styles from "./index.module.scss";


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

  const Pages = (selectedIndex: number, totalPages: number) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const isTabPC = width > 768;

    if (isTabPC) {
      if (totalPages <= 8) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
    } else {
      if (totalPages <= 6) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
    }


    const startPage = Math.max(2, selectedIndex - 1);
    const endPage = Math.min(totalPages - 1, selectedIndex + 1);

    const pages: (number | "...")[] = [];

    pages.push(1);

    if (startPage > 2) {
      pages.push("...");
    }

    for (let p = startPage; p <= endPage; p++) {
      pages.push(p);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };


  const prevButtonDisable = selectedIndex === 1;
  const nextButtonDisable = selectedIndex === totalPages;

  return (
    <div className={styles.paginationButtonsWrapper}>

      {/* 「前へ」のボタンを配置 */}
      <button
        className={`${styles.prevAndNextButton} ${prevButtonDisable ? styles.disabled : ""}`}
        onClick={onPrev}
        disabled={prevButtonDisable}
      >
        <SlArrowLeft />
      </button>

      {/* 「丸に数字」のボタンを配置 (例:1),mapで並べる*/}
      {Pages(selectedIndex, totalPages).map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>
            ...
          </span>
        ) : (
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
        )
      )}



      {/* 「次へ」のボタンを配置 */}
      <button
        className={`${styles.prevAndNextButton} ${nextButtonDisable ? styles.disabled : ""}`}
        onClick={onNext}
        disabled={nextButtonDisable}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};