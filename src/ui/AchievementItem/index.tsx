import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { IconButton } from "../IconButton";

type Props = {
  date: String;
  text: String;
  image: string;
  articlelink: "t" | "f";
  weblink: "t" | "f";
  applink: "t" | "f";
  googlelink: "t" | "f";
  gitlink: "t" | "f";
  article_onClick?: () => void;
  web_onClick?: () => void;
  app_onClick?: () => void;
  google_onClick?: () => void;
  git_onClick?: () => void;
};

export const AchievementItem: React.FC<Props> = ({
  date,
  text,
  image,
  articlelink,
  weblink,
  applink,
  googlelink,
  gitlink,
  article_onClick,
  web_onClick,
  app_onClick,
  google_onClick,
  git_onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.context}>
        <div className={styles.date}>{date}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.tag}>
          <div className={styles.tag}>
            {articlelink === "t" && (
              <div>
                <IconButton
                  text={"See Article"}
                  imgUrl={""}
                  onClick={article_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
            {weblink === "t" && (
              <div>
                <IconButton
                  text={"webサイト"}
                  imgUrl={""}
                  onClick={web_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
            {applink === "t" && (
              <div>
                <IconButton
                  text={"App Store"}
                  imgUrl={""}
                  onClick={app_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
            {googlelink === "t" && (
              <div>
                <IconButton
                  text={"Google Play"}
                  imgUrl={""}
                  onClick={google_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Image className={styles.image} src={image} alt="" width={200} height={200} />
    </div>
  );
};
