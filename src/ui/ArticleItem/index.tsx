import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  image: string;
  date: string;
  title: string;
  tags: string[];
};

export const ArticleItem: React.FC<Props> = ({ image, date, title, tags }) => {
  return (
    <div>
      <Image src={image} alt={title} width={360} height={200} />
      <div>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
