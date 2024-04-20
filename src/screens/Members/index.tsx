import next from "next";
import Image from "next/image";
import React, { useState } from "react";
import { MemberStory } from "@/ui/MemberStory/index";
import { Memberstory } from "./data";
import styles from "./index.module.scss";

type Props = {};

export const MembersScreen: React.FC<Props> = (props) => {
  const [] = useState("");
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.allnum}>
          全体人数：約<span>70</span>人
        </h1>
        <div className={styles.graph}>
          <div className={styles.graphcontent}>
            <h2 className={styles.title}>男女比</h2>
            <Image
              className={styles.mf_photo}
              src="/mf_photo.png"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className={styles.graphcontent}>
            <h2 className={styles.title}>大学</h2>
            <Image
              className={styles.univ_photo}
              src="/univ_photo.png"
              alt=""
              width={300}
              height={300}
            />
            <p className={styles.detail}>
              他大学：椙山女学園大、名城大、名古屋市立大、南山大、慶應義塾大、etc..
            </p>
          </div>

          <div className={styles.graphcontent}>
            <h2 className={styles.title}>学部</h2>
            <Image
              className={styles.dep_photo}
              src="/dep_photo.png"
              alt=""
              width={300}
              height={300}
            />
            <p className={styles.detail}>
              その他：理学部、理工学部、法学部、文学部、教育学部、etc…
            </p>
          </div>
        </div>
        <div className={styles.memberstory}>
          <h1 className={styles.memberstory_title}>#メンバーのお話</h1>
          <div className={styles.Memberstory}>
            {Memberstory.map((prop, num) => (
              <MemberStory
                key={num}
                name={prop.name}
                text={prop.text}
                type={prop.type}
                image={prop.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
