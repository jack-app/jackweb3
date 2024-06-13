import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import { filteredProducts, useCarousel } from "./hooks/";
import { ProductsCarouselPresentation } from "./presentations";

interface ProductsCarouselProps {
  products: ProductionProps[];
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
  const carouselProducts: ProductionProps[] = filteredProducts(products);
  const { emblaRef, handlePrevButton, handleNextButton, handleRadioButton, selectedIndex } =
    useCarousel(carouselProducts);

  return (
    <ProductsCarouselPresentation
      emblaRef={emblaRef}
      handlePrevButton={handlePrevButton}
      handleNextButton={handleNextButton}
      handleRadioButton={handleRadioButton}
      selectedIndex={selectedIndex}
      products={carouselProducts}
    />
  );
};
