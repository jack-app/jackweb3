import React from "react";
import products from "@/pages/products";
import { Production } from "@/ui/Production";
import { SelectProductionPresentation } from "./presentations/";

type Props = {
  products: any; // Replace 'any' with the actual type of 'products'
};

export const SelectProduction: React.FC<Props> = (props) => {
  const { products } = props;

  return (
    <>
      <SelectProductionPresentation products={products} />
    </>
  );
};
