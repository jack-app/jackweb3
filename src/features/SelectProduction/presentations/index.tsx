import React, { useState } from "react";
import { Production } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export const SelectProductionPresentation: React.FC<Props> = (props) => {
  const [category, setCategory] = useState<"all" | "web" | "game" | "mobile">("all");

  const filterProductions = (production: JSX.Element) => {
    const categoryProp = production.props.category;
    if (category === "all" || categoryProp === category) {
      return true;
    }
    if (category === "web" && categoryProp === "web" && production.props.web_href) {
      return true;
    }
    if (
      category === "mobile" &&
      categoryProp === "mobile" &&
      (production.props.app_href || production.props.google_href)
    ) {
      return true;
    }
    return false;
  };

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
      <div className={styles.productions}></div>
    </div>
  );
};
