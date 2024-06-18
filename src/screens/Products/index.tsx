import React from "react";
import { ProductsCarousel } from "@/features/ProductsCarousel";
import { SelectProduction } from "@/features/SelectProduction";
import { Heading1 } from "@/ui/Heading1";
import { ProductDetailItem } from "@/ui/ProductDetailItem";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  products: ProductionProps[];
};

export const ProductsScreen: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <Heading1 enTitle="Products" jaTitle={"プロダクト"} />
      <div className={styles.carousel}>
        <ProductsCarousel products={products} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.all_products}>
        <SelectProduction products={products} />
      </div>
    </div>
  );
};
