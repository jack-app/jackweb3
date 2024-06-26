import { useState } from "react";
import { Props as ProductionProps } from "@/ui/Production";

type UseSelectProduction = (allProducts: ProductionProps[]) => {
  categories: string[];
  category: string;
  setCategory: (category: string) => void;
  filteredProducts: ProductionProps[];
};

export const categories = ["all", "web", "mobile", "game"];

export const useSelectProduction: UseSelectProduction = (allProducts) => {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");

  const filteredProducts = allProducts.filter((product) => {
    if (category === "all") return true;
    return (product.tags ?? []).includes(category);
  });

  return {
    categories,
    category,
    setCategory,
    filteredProducts,
  };
};
