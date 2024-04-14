import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./index.module.scss";

interface ActivitiesCarouselProps {
  images: string[];
  interval: number;
}

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({
  images,
  interval = 5000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [resetFlag, setResetFlag] = useState<boolean>(false);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
  };

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi, images]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi, images]);

  const AutoAcrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [emblaApi, images]);

  useEffect(() => {
    const instance = setInterval(() => {
      AutoAcrollNext();
    }, interval);

    return () => clearInterval(instance);
  }, [scrollNext, interval, AutoAcrollNext, resetFlag]);

  return (
    <div className={`embla ${styles.carousel}`}>
      <div className={styles.slideWithButton}>
        <button
          className={`embla__button  ${styles.button} ${styles.prevButton}`}
          onClick={scrollPrev}
        >
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
        <button
          className={`embla__button  ${styles.button} ${styles.nextButton}`}
          onClick={scrollNext}
        >
          <Image src="carousel_next_arrow.svg" alt="next button" width={20} height={20} />
        </button>
      </div>
      <div className={`embla__dots ${styles.dots}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${styles.dot} ${selectedIndex === index ? styles.dotActive : ""}`}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
