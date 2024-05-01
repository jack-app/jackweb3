import { useCarousel } from "./hooks/";
import { ActivitiesCarouselPresentation } from "./presentations";

interface ActivitiesCarouselProps {}

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = () => {
  const { emblaRef, handlePrevButton, handleNextButton, handleRadioButton, images, selectedIndex } =
    useCarousel();

  return (
    <ActivitiesCarouselPresentation
      emblaRef={emblaRef}
      handlePrevButton={handlePrevButton}
      handleNextButton={handleNextButton}
      handleRadioButton={handleRadioButton}
      images={images}
      selectedIndex={selectedIndex}
    />
  );
};
