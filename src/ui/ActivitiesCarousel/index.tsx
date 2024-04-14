import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
// import 'embla-carousel/embla-carousel.css';
import styles from "./index.module.scss";

interface ActivitiesCarouselProps {
  images: string[];
}

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
  };

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [emblaApi, images]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [emblaApi, images]);

  return (
    <div className="embla">
      <button className="embla__button" onClick={scrollPrev}>
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
      <button className={styles.embla__button} onClick={scrollNext}>
        <Image src="carousel_next_arrow.svg" alt="next button" width={20} height={20} />
      </button>
      <div className={styles.embla__dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${selectedIndex === index ? styles["embla__dot--selected"] : ""}`}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
