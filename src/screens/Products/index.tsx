import React from "react";
import { SelectProduction } from "@/features/SelectProduction";
import { Production, Props as ProductionProps } from "@/ui/Production";

type Props = {
  products: ProductionProps[];
};

export const ProductsScreen: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <SelectProduction products={products} />
    </div>
  );
};
