import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ProductionDetailProps } from "@/ui/Production";
import { interval } from "./data";

export const useCarousel = (products: ProductionDetailProps[]) => {
  console.log(products.length);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [resetFlag, setResetFlag] = useState<boolean>(false);

  const handleRadioButton = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
  };

  const handlePrevButton = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    setSelectedIndex((prev) => (prev - 1 + products.length) % products.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi, products.length]);

  const handleNextButton = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % products.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi, products.length]);

  const AutoScroll = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % products.length);
  }, [emblaApi, products.length]);

  useEffect(() => {
    const instance = setInterval(() => {
      AutoScroll();
    }, interval);

    return () => clearInterval(instance);
  }, [AutoScroll, resetFlag]);

  return {
    emblaRef,
    handlePrevButton,
    handleNextButton,
    handleRadioButton,
    images: products,
    selectedIndex,
  };
};
