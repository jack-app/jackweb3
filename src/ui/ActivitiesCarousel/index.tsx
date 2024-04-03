import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';

type ActivitiesCarouselProps = {
  images: string[];
  interval?: number;
  duration?: number;
};

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({ images, interval = 5000, duration = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, interval]);

  const goToPrevious = () => {
    if (!isAnimating) {
      // setDirection('prev');
      setIsAnimating(true);
      animateSlide('prev');
    }
  };

  const goToNext = () => {
    if (!isAnimating) {
      // setDirection('next');
      setIsAnimating(true);
      animateSlide('next');
    }
  };

  const goToIndex = (index: number) => {
    if (!isAnimating) {
      // setDirection(index > currentIndex ? 'next' : 'prev');
      setIsAnimating(true);
      animateSlide(index > currentIndex ? 'next' : 'prev', index);
    }
  };

  const animateSlide = (direction: 'next' | 'prev', index?: number) => {
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
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImageContainer}>
        <button className={styles.carouselControlPrev} onClick={goToPrevious}>
          <span className={`${styles.carouselControlIcon} ${styles.carouselControlPrevIcon}`} />
        </button>
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
        <button className={styles.carouselControlNext} onClick={goToNext}>
          <span className={`${styles.carouselControlIcon} ${styles.carouselControlNextIcon}`} />
        </button>
      </div>
      <div className={styles.carouselRadioButtons}>
        {images.map((_, index) => (
          <span
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