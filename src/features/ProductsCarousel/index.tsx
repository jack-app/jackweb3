import { useCarousel } from "./hooks/";
import { ProductsCarouselPresentation } from "./presentations";

interface ProductsCarouselProps {}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = () => {
  const { emblaRef, handlePrevButton, handleNextButton, handleRadioButton, images, selectedIndex } =
    useCarousel();

  return (
    <ProductsCarouselPresentation
      emblaRef={emblaRef}
      handlePrevButton={handlePrevButton}
      handleNextButton={handleNextButton}
      handleRadioButton={handleRadioButton}
      images={images}
      selectedIndex={selectedIndex}
    />
  );
};
