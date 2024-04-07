import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import styles from './index.module.scss';

type ActivitiesCarouselProps = {
  images: string[];
  interval?: number;
  duration?: number;
};

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({
  images,
  interval = 5000,
  duration = 500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  const animateSlide = useCallback((direction: 'next' | 'prev', index?: number) => {
    const imagesContainer = imagesContainerRef.current;
    if (imagesContainer) {
      const slideWidth = imagesContainer.offsetWidth;
      const slideAnimation = imagesContainer.animate(
        [
          { transform: `translateX(${direction === 'next' ? 0 : -slideWidth}px)` },
          { transform: `translateX(${direction === 'next' ? -slideWidth : 0}px)` },
        ],
        { duration: duration, easing: 'ease-in-out' }
      );

      slideAnimation.onfinish = () => {
        setCurrentIndex(index !== undefined ? index : (direction === 'next' ? (currentIndex + 1) % images.length : (currentIndex - 1 + images.length) % images.length));
        setIsAnimating(false);
      };
    }
  }, [currentIndex, duration, images]);

  const handleGoToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      animateSlide('prev');
    }
  };

  const handleGoToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      animateSlide('next');
    }
  };

  const autoGoToNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      animateSlide('next');
    }
  }, [isAnimating, animateSlide]);


  const goToIndex = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      animateSlide(index > currentIndex ? 'next' : 'prev', index);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      autoGoToNext();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, interval, autoGoToNext]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <button className={styles.carouselControlPrev} onClick={handleGoToPrevious}>
          <span className={`${styles.carouselControlIcon} ${styles.carouselControlPrevIcon}`} />
        </button>
        <div className={styles.carouselImageContainer}>
          <div className={styles.carouselImages} ref={imagesContainerRef}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </div>
        </div>
        <button className={styles.carouselControlNext} onClick={handleGoToNext}>
          <span className={`${styles.carouselControlIcon} ${styles.carouselControlNextIcon}`} />
        </button>
      </div>
      <div className={styles.carouselRadioButtons}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselRadioButton} ${index === currentIndex % images.length ? styles.active : ''
              }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};