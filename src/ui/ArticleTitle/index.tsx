import React from "react";
import { PageInfo as Props } from "@/pages/blog/[id]";
import styles from "./index.module.scss";
import { Tag } from "../Tag";
import { Writer } from "../Writer";

export const ArticleTitle: React.FC<Props> = ({ title, writerName, writerImage, tags, date }) => {
  return (
    <div>
      <Writer writerName={writerName} writerImage={writerImage} />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} color={tag.color} isLink={tag.isLink} />
        ))}
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};
