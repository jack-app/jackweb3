import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { TagType, Tag } from "../Tag";

export type Props = {
  id: string;
  image: string | null;
  date: string;
  title: string;
  tags: TagType[];
};

export const ArticleItem: React.FC<Props> = ({ id, image, date, title, tags }) => {
  return (
    <article className={styles.wrapper}>
      <img src={image ? image : ""} alt={title} width={360} height={189} className={styles.image} />
      <div className={styles.descriptionWrapper}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <Link href={`/blog/${id}`} className={styles.link}>
            {title}
          </Link>
        </h3>
        <ul className={styles.tagWrapper}>
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} isLink={tag.isLink} />
          ))}
        </ul>
      </div>
    </article>
  );
};
