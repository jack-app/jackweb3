import Image from "next/image";
import { Props } from "next/script";
import React from "react";
import { Heading2 } from "@/ui/Heading2";
import { MemberStory } from "@/ui/MemberStory/index";
import { Members, memberStories } from "./data";
import styles from "./index.module.scss";

export const MembersScreen: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.allnum}>
          全体人数：約<span>70</span>人
        </h1>
        <div className={styles.graph}>
          {Members.map((Mem) => {
            return (
              <>
                <div className={styles.graphcontent}>
                  <h2 className={styles.title}>{Mem.title}</h2>
                  <Image
                    className={styles.malefemale_graph}
                    src={Mem.graph}
                    alt=""
                    width={300}
                    height={300}
                  />
                  <p className={styles.detail}>{Mem.detail}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className={styles.memberstory}>
          <Heading2 text="メンバーのお話" />

          {memberStories.map((prop, num) => (
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
    </>
  );
};
