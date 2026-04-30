import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";
import { RenderText } from "./logics";
import { IconLink } from "../IconLink";

export type Props = {
  id?: string;
  image: { url: string; width: number | null; height: number | null };
  title: string;
  text?: RichText[];
  tags?: string[];
  web_href?: string | null;
  app_href?: string | null;
  google_href?: string | null;
  git_href?: string | null;
};

export type ProductionDetailProps = Props & {
  description: RichText[];
  release_date?: RichText[];
  detail?: RichText[];
};

export const Production: React.FC<Props> = ({
  image,
  title,
  text,
  web_href,
  app_href,
  google_href,
  git_href,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.item_image_wrapper}
        style={{
          aspectRatio:
            image.width && image.height ? `${image.width} / ${image.height}` : "352 / 200",
        }}
      >
        {/* 背景のぼかし画像 */}
        <div className={styles.bg_blur_container}>
          <Image className={styles.bg_blur} src={image.url} alt="" fill />
        </div>
        <Image
          className={styles.item_img}
          src={image.url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 352px"
        />
      </div>
      <div className={styles.item_context}>
        <div className={styles.context}>
          <div className={styles.title}>{title}</div>
          {Array.isArray(text) && <div className={styles.text}>{RenderText(text)}</div>}
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
            {git_href && (
              <IconLink href={git_href} text="GitHub" icon={FaGithub} size="s" openInNewTab />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
