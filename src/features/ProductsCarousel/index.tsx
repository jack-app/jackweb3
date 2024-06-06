import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import { useCarousel } from "./hooks/";
import { ProductsCarouselPresentation } from "./presentations";

interface ProductsCarouselProps {
  products: ProductionProps[];
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
  const { emblaRef, handlePrevButton, handleNextButton, handleRadioButton, selectedIndex } =
    useCarousel(products);

  return (
    <ProductsCarouselPresentation
      emblaRef={emblaRef}
      handlePrevButton={handlePrevButton}
      handleNextButton={handleNextButton}
      handleRadioButton={handleRadioButton}
      selectedIndex={selectedIndex}
      products={products}
    />
  );
};
