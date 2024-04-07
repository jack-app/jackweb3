import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { IconLink } from "../IconLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Props = {
  date: String;
  text: String;
  image: string;
  article_href: String;
  web_href: String;
  app_href: String;
  google_href: String;
  git_href: String;
};

export const AchievementItem: React.FC<Props> = ({
  date,
  text,
  image,
  article_href,
  web_href,
  app_href,
  google_href,
  git_href,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.context}>
        <div className={styles.date}>{date}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.tag}>
          <div className={styles.tag}>
            {article_href && (
              <div>
                <IconLink
                  href={""}
                  text="See Article"
                  icon={FaExternalLinkAlt}
                  size="s"
                  openInNewTab
                />
              </div>
            )}
            {web_href && (
              <div>
                <IconLink
                  href={""}
                  text="webサイト"
                  icon={FaExternalLinkAlt}
                  size="s"
                  openInNewTab
                />
              </div>
            )}
            {app_href && (
              <div>
                <IconLink href={""} text="App Store" icon={FaApple} size="s" openInNewTab />
              </div>
            )}
            {google_href && (
              <div>
                <IconLink href={""} text="Google Play" icon={FaGooglePlay} size="s" openInNewTab />
              </div>
            )}

            {git_href && (
              <div>
                <IconLink href={""} text="GitHub" icon={FaGithub} size="s" openInNewTab />
              </div>
            )}
          </div>
        </div>
      </div>
      <Image className={styles.image} src={image} alt="" width={200} height={200} />
    </div>
  );
};
