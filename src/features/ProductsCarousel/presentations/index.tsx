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
    <div className={styles.embla}>
      <div className={styles.slideWithButton}>
        <button className={` ${styles.embla__button}`} onClick={handlePrevButton}>
          <Image src="carousel_products_prev.svg" alt="prev button" width={64} height={64} />
        </button>
        <div className={`${styles.embla__viewport}`} ref={emblaRef}>
          <div className={` ${styles.embla__container}`}>
            {products.map((product) => (
              <div key={product.id} className={`${styles.embla__slide}`}>
                <div className={styles.embla__slide__content}>
                  <ProductDetailItem product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.embla__button} onClick={handleNextButton}>
          <Image src="carousel_products_next.svg" alt="next button" width={64} height={64} />
        </button>
      </div>
      <div className={styles.embla__dots}>
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`${styles.embla__dot} ${selectedIndex === index ? styles.embla__dotActive : ""}`}
            onClick={() => handleRadioButton(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
