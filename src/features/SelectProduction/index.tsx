import React from "react";
import { Props as ProductionProps } from "@/ui/Production";
import { SelectProductionPresentation } from "./presentations/";

type Props = {
  products: ProductionProps[];
};

export const SelectProduction: React.FC<Props> = ({ products }) => {
  return (
    <>
      <SelectProductionPresentation products={products} />
    </>
  );
};
