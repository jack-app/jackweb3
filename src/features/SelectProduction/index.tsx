import React from "react";
import { Props as ProductionProps } from "@/ui/Production";
import { useSelectProduction } from "./hooks/";
import { SelectProductionPresentation } from "./presentations/";

type Props = {
  products: ProductionProps[];
};

export const SelectProduction: React.FC<Props> = ({ products }) => {
  const { categories, category, setCategory, filteredProducts } = useSelectProduction(products);
  return (
    <>
      <SelectProductionPresentation
        categories={categories}
        category={category}
        setCategory={setCategory}
        products={filteredProducts}
      />
    </>
  );
};
