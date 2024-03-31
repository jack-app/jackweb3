import React from 'react';
import styles from './index.module.scss';
import Image from "next/image";

type Props = {
  question: string;
  answer: string;
};

export const Accordion: React.FC<Props> = ({ question, answer }) => {
  return (
    <details className={styles.accordion}>
      <summary className={styles.question}>
        <div className={styles.q_sentence}>
          <span className={styles.capital}>Q&#46;</span><span className={styles.q_content}>{question}</span>
        </div>
        <Image src="/image 2.png" alt="open" className={styles.icon} width={25} height={27} />
      </summary>
      <div className={styles.answer}>
        <div className={styles.a_sentence}>
          <span className={styles.capital}>A&#46;</span><span className={styles.a_content}>{answer}</span>
        </div>
      </div>
    </details>
  );
};