import React from "react";
import styles from "./index.module.scss";
import { IconLink } from "../IconLink";
import Image from "next/image";
import { IconBaseProps } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

type Props = {
  image: string;
  title: String;
  text: String;
  web_href?: String;
  app_href?: String;
  google_href?: String;
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
              <div>
                <IconLink href="" text="サイト" icon={FaExternalLinkAlt} size="s" openInNewTab />
              </div>
            )}
            {app_href && (
              <div>
                <IconLink href="" text="App Store" icon={FaApple} size="s" openInNewTab />
              </div>
            )}
            {google_href && (
              <div>
                <IconLink href="" text="Google Play" icon={FaGooglePlay} size="s" openInNewTab />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
