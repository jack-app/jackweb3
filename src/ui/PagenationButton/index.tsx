import React from "react";
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
  const Pages = (selectedIndex: number, totalPages: number): (number | "...")[] => {
    if (totalPages >= 6) {
      if (selectedIndex < 3) {
        return [1, 2, 3, "...", totalPages];
      }

      if (selectedIndex == 3) {
        return [1, 2, 3, 4, "...", totalPages];
      }

      if (selectedIndex == totalPages - 2) {
        return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      }

      if (selectedIndex > totalPages - 2) {
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
      }

      return [1, "...", selectedIndex - 1, selectedIndex, selectedIndex + 1, "...", totalPages];
    }

    return Array.from({ length: totalPages }, (_, index) => index + 1);
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
            <p className={selectedIndex === page ? styles.numberTextSelected : styles.numberText}>
              {page}
            </p>
          </button>
        ),
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
