import React, { useState } from "react";
import { Production } from "@/ui/Production";
import { Props as ProductionProps } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  products: ProductionProps[];
};

export const SelectProductionPresentation: React.FC<Props> = ({ products }) => {
  const categories = ["all", "web", "game", "mobile"];
  const [category, setCategory] = useState<(typeof categories)[number]>("all");

  const filteredProducts = products.filter((product) => {
    if (category === "all") return true;
    return product.tags.includes(category);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_context}>
        {categories.map((item) => (
          <button
            key={item}
            className={`${styles.button} ${category === item ? styles.active : ""}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.productions}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.production}>
            <Production
              image={product.image}
              title={product.title}
              text={product.text}
              web_href={product.web_href}
              app_href={product.app_href}
              google_href={product.google_href}
              tags={product.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
