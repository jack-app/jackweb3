import React from "react";
import styles from "./index.module.scss";
import { IconButton } from "../IconButton";
import Image from "next/image";
import website from "./../../../public/website_jamp_icon.svg";
import apple from "./../../../public/applestore_icon.svg";
import google from "./../../../public/googleplay_icon.svg";

type Props = {
  image: string;
  title: String;
  text: String;
  weblink: "t" | "f";
  applink: "t" | "f";
  googlelink: "t" | "f";
  web_onClick?: () => void;
  app_onClick?: () => void;
  google_onClick?: () => void;
};

export const Production: React.FC<Props> = ({
  image,
  title,
  text,
  weblink,
  applink,
  googlelink,
  web_onClick,
  app_onClick,
  google_onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.item_img}
        src={image}
        alt="プロダクトの画像"
        width={352}
        height={200}
      />
      <div className={styles.item_context}>
        <div className={styles.context}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
          <div className={styles.tag}>
            {weblink === "t" && (
              <div>
                <IconButton
                  text={"サイト"}
                  imgUrl={website}
                  onClick={web_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
            {applink === "t" && (
              <div>
                <IconButton
                  text={"App Store"}
                  imgUrl={apple}
                  onClick={app_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
            {googlelink === "t" && (
              <div>
                <IconButton
                  text={"Google Play"}
                  imgUrl={google}
                  onClick={google_onClick || (() => {})}
                  size={"s"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
