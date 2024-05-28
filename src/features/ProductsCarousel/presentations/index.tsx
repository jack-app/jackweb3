import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  handlePrevButton: () => void;
  handleNextButton: () => void;
  handleRadioButton: (index: number) => void;
  images: string[];
  selectedIndex: number;
  emblaRef: any;
};

export const ProductsCarouselPresentation: React.FC<Props> = ({
  handlePrevButton,
  handleNextButton,
  handleRadioButton,
  images,
  selectedIndex,
  emblaRef,
}) => {
  return (
    <div className={`embla ${styles.carousel}`}>
      <div className={styles.slideWithButton}>
        <button className={`embla__button  ${styles.button}`} onClick={handlePrevButton}>
          <Image src="carousel_prev_arrow.svg" alt="prev button" width={20} height={20} />
        </button>
        <div className={`embla__viewport ${styles.viewport}`} ref={emblaRef}>
          <div className={`embla__container ${styles.container}`}>
            {images.map((image, index) => (
              <div key={index} className={`embla__slide ${styles.slide}`}>
                <Image src={image} alt={`num ${index}`} width={600} height={360} />
              </div>
            ))}
          </div>
        </div>
        <button className={`embla__button  ${styles.button}`} onClick={handleNextButton}>
          <Image src="carousel_next_arrow.svg" alt="next button" width={20} height={20} />
        </button>
      </div>
      <div className={`embla__dots ${styles.dots}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${styles.dot} ${selectedIndex === index ? styles.dotActive : ""}`}
            onClick={() => handleRadioButton(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
