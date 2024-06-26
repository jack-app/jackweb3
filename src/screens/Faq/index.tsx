import React from "react";
import { Accordion } from "@/ui/Accordion";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import { aboutJoining, aboutActivity, aboutMember } from "./data";
import styles from "./index.module.scss";

type Props = {};

export const FaqScreen: React.FC<Props> = (props) => {
  return (
    <main>
      <Heading1 enTitle="FAQ" jaTitle="よくあるご質問" />
      <div className={styles.faq}>
        <div className={styles.about}>
          <Heading2 text="入部について" />
          <div className={styles.content}>
            {aboutJoining.map((prop, num) => (
              <Accordion key={num} question={prop.question} answer={prop.answer} />
            ))}
          </div>
        </div>
        <div className={styles.about}>
          <Heading2 text="活動について" />
          <div className={styles.content}>
            {aboutActivity.map((prop, num) => (
              <Accordion key={num} question={prop.question} answer={prop.answer} />
            ))}
          </div>
        </div>
        <div className={styles.about}>
          <Heading2 text="メンバーについて" />
          <div className={styles.content}>
            {aboutMember.map((prop, num) => (
              <Accordion key={num} question={prop.question} answer={prop.answer} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
