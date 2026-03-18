import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./index.module.scss";
import { IconLink } from "../IconLink";

export type Props = {
  id: string;
  date: string;
  text: string;
  image: { url: string; width: number | undefined; height: number | undefined };
  article_href?: string;
  web_href?: string;
  app_href?: string;
  google_href?: string;
  git_href?: string;
};

export const AchievementItem: React.FC<Props> = ({
  id,
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
                  href={article_href}
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
                  href={web_href}
                  text="webサイト"
                  icon={FaExternalLinkAlt}
                  size="s"
                  openInNewTab
                />
              </div>
            )}
            {app_href && (
              <div>
                <IconLink href={app_href} text="App Store" icon={FaApple} size="s" openInNewTab />
              </div>
            )}
            {google_href && (
              <div>
                <IconLink
                  href={google_href}
                  text="Google Play"
                  icon={FaGooglePlay}
                  size="s"
                  openInNewTab
                />
              </div>
            )}

            {git_href && (
              <div>
                <IconLink href={git_href} text="GitHub" icon={FaGithub} size="s" openInNewTab />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        style={{
          aspectRatio: image.width && image.height ? `${image.width} / ${image.height}` : "16 / 9",
        }}
      >
        <Image
          className={styles.image}
          src={image.url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
    </div>
  );
};
