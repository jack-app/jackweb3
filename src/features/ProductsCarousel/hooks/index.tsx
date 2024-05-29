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

function rgbToHsl(r: number, g: number, b: number) {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function decreaseLightness(h: number, s: number, l: number, decreaseAmount: number) {
  l = Math.max(0, l - decreaseAmount);
  return `hsl(${h * 360},${s * 100}%,${l * 100}%)`;
}

export function color_change(data: any) {
  let [r, g, b] = data;
  const [h, s, l] = rgbToHsl(r, g, b);
  const color = decreaseLightness(h, s, l, -0.1); // decrease lightness by 20%
  console.log(color);
  return color;
}
