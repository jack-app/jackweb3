import Image from "next/image";
import { ProductDetailItem } from "@/ui/ProductDetailItem";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  handlePrevButton: () => void;
  handleNextButton: () => void;
  handleRadioButton: (index: number) => void;
  selectedIndex: number;
  emblaRef: any;
  products: ProductionProps[];
};

export const ProductsCarouselPresentation: React.FC<Props> = ({
  handlePrevButton,
  handleNextButton,
  handleRadioButton,
  selectedIndex,
  emblaRef,
  products,
}) => {
  return (
    <div className={`embla ${styles.carousel}`}>
      <div className={styles.slideWithButton}>
        <button className={`embla__button  ${styles.button}`} onClick={handlePrevButton}>
          <Image src="carousel_products_prev.svg" alt="prev button" width={64} height={64} />
        </button>
        <div className={`embla__viewport ${styles.viewport}`} ref={emblaRef}>
          <div className={`embla__container ${styles.container}`}>
            {products.map((product) => (
              <div key={product.id} className={`embla__slide ${styles.slide}`}>
                <ProductDetailItem product={product} />
              </div>
            ))}
          </div>
        </div>
        <button className={`embla__button  ${styles.button}`} onClick={handleNextButton}>
          <Image src="carousel_products_next.svg" alt="next button" width={64} height={64} />
        </button>
      </div>
      <div className={`embla__dots ${styles.dots}`}>
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`embla__dot ${styles.dot} ${selectedIndex === index ? styles.dotActive : ""}`}
            onClick={() => handleRadioButton(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
