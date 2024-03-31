import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { Color, convertToColor } from "./logics";

type Props = {
  name: string;
  color: Color;
  isLink?: boolean;
};

export type TagType = Props & {
  id: string;
};

export const Tag: React.FC<Props> = ({ name, color, isLink = false }) => {
  const colorCode = convertToColor[color];

  return isLink ? (
    <Link
      href={`/tag/${name}`}
      className={styles.link}
      style={{
        backgroundColor: colorCode,
      }}
    >
      {name}
    </Link>
  ) : (
    <div
      className={styles.tag}
      style={{
        backgroundColor: colorCode,
      }}
    >
      {name}
    </div>
  );
};
