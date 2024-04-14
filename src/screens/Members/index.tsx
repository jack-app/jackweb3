import next from "next";
import Image from "next/image";
import React, { useState } from "react";
import { MemberStory } from "@/ui/MemberStory/index";
import styles from "./index.module.scss";

type Props = {};

export const MembersScreen: React.FC<Props> = (props) => {
  const [] = useState("");
  return (
    <>
      <div>
        <h1 className={styles.allnum}>全体人数：約70人</h1>
        <h2 className={styles.mf}>男女比</h2>
        <h2 className={styles.univ}>大学</h2>
        <h2 className={styles.dep}>学部</h2>
        <Image className={styles.mf_photo} src="/mf_photo.png" alt="" width={200} height={200} />
        <Image
          className={styles.univ_photo}
          src="/univ_photo.png"
          alt=""
          width={200}
          height={200}
        />
        <p>他大学：</p>
        <Image className={styles.dep_photo} src="/dep_photo.png" alt="" width={200} height={200} />
        <p>その他：理学部、理工学部、法学部、文学部、教育学部、etc…</p>
      </div>

      <div>
        <h1 className={styles.memberstory}>メンバーのお話</h1>
      </div>
    </>
  );
};
