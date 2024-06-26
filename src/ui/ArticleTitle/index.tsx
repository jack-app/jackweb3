import React from "react";
import styles from "./index.module.scss";
import { Tag, TagType } from "../Tag";
import { Writer } from "../Writer";

export type Props = {
  title: string;
  writerName: string;
  writerImage: string;
  tags: TagType[];
  date: string;
};

export const ArticleTitle: React.FC<Props> = ({ title, writerName, writerImage, tags, date }) => {
  return (
    <div>
      <Writer writerName={writerName} writerImage={writerImage} />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} color={tag.color} isLink />
        ))}
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};
