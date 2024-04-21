import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import styles from "./index.module.scss";
import { IconLink } from "../IconLink";

export type Props = {
  image: string;
  title: String;
  text: String;
  web_href?: string;
  app_href?: string;
  google_href?: string;
};

export const Production: React.FC<Props> = ({
  image,
  title,
  text,
  web_href,
  app_href,
  google_href,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.item_img} src={image} alt="" width={352} height={200} />
      <div className={styles.item_context}>
        <div className={styles.context}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
          <div className={styles.tag}>
            {web_href && (
              <IconLink
                href={web_href}
                text="サイト"
                icon={FaExternalLinkAlt}
                size="s"
                openInNewTab
              />
            )}
            {app_href && (
              <IconLink href={app_href} text="App Store" icon={FaApple} size="s" openInNewTab />
            )}
            {google_href && (
              <IconLink
                href={google_href}
                text="Google Play"
                icon={FaGooglePlay}
                size="s"
                openInNewTab
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
