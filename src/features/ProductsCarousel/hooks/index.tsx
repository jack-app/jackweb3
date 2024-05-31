import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { images, interval } from "@/features/ProductsCarousel/hooks/data";

export const useCarousel = () => {
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
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi]);

  const handleNextButton = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setResetFlag((prev) => !prev);
  }, [emblaApi]);

  const AutoScroll = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [emblaApi]);

  useEffect(() => {
    const instance = setInterval(() => {
      AutoScroll();
    }, interval);

    return () => clearInterval(instance);
  }, [AutoScroll, resetFlag]);

  return { emblaRef, handlePrevButton, handleNextButton, handleRadioButton, images, selectedIndex };
};
