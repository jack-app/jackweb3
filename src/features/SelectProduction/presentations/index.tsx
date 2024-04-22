import React, { useState } from "react";
import { Production } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  products: Array<{
    image: string;
    title: string;
    text: string;
    tags: any;
    web_href: string | undefined;
    app_href: string | undefined;
    google_href: string | undefined;
  }>;
};

export const SelectProductionPresentation: React.FC<Props> = ({ products }) => {
  const [category, setCategory] = useState<"all" | "web" | "game" | "mobile">("all");

  const filteredProducts = products.filter((product) => {
    if (category === "all") {
      return true;
    }
    if (category === "web") {
      return product.tags.indexOf("web") !== -1;
    }
    if (category === "game") {
      return product.tags.indexOf("game") !== -1;
    }
    if (category === "mobile") {
      return product.tags.indexOf("mobile") !== -1;
    }
    return false;
  });

  // console.log("filteredProducts", filteredProducts);

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_context}>
        <button
          className={`${styles.button_all} ${category === "all" ? styles.active : ""}`}
          onClick={() => setCategory("all")}
        >
          all
        </button>
        <button
          className={`${styles.button_web} ${category === "web" ? styles.active : ""}`}
          onClick={() => setCategory("web")}
        >
          web
        </button>
        <button
          className={`${styles.button_game} ${category === "game" ? styles.active : ""}`}
          onClick={() => setCategory("game")}
        >
          game
        </button>
        <button
          className={`${styles.button_mobile} ${category === "mobile" ? styles.active : ""}`}
          onClick={() => setCategory("mobile")}
        >
          mobile
        </button>
      </div>
      <div className={styles.productions}>
        {filteredProducts.map((product, index) => (
          <div key={index} className={styles.production}>
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
