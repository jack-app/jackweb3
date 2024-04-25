import React from "react";
import { y2023 } from "./data";
import styles from "./index.module.scss";
import { AchievementItem } from "@/ui/AchievementItem";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
type Props = {};

export const AchievementsScreen: React.FC<Props> = (props) => {
  return (
    <main>
      <Heading1 enTitle="Achievements" jaTitle="活動実績" />
      <div className={styles.achievements}>
        <div className={styles.years}>
          <Heading2 text="2023" />
          <div className={styles.content}>
            {y2023.map((prop, num) => (
              <AchievementItem
                key={num}
                image={prop.image}
                date={prop.date}
                text={prop.text}
                article_href={prop.article_href}
                web_href={prop.web_href}
                app_href={prop.article_href}
                google_href={prop.article_href}
                git_href={prop.article_href}
              />
            ))}
          </div>
        </div>
        <div className={styles.years}>
          <Heading2 text="2022" />
          <div className={styles.content}></div>
        </div>
        <div className={styles.years}>
          <Heading2 text="2020" />
          <div className={styles.content}></div>
        </div>
      </div>
    </main>
  );
};
