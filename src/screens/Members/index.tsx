import Image from "next/image";
import React from "react";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import { MemberStory } from "@/ui/MemberStory/index";
import { Members, memberStories } from "./data";
import styles from "./index.module.scss";

export const MembersScreen: React.FC = () => {
  return (
    <main>
      <Heading1 enTitle="Members" jaTitle="メンバー" />
      <div className={styles.wrapper}>
        <h1 className={styles.allnum}>
          全体人数：約<span>70</span>人
        </h1>
        <div className={styles.graph}>
          {Members.map((member, index) => (
            <div className={styles.graphcontent} key={index}>
              <h2 className={styles.title}>{member.title}</h2>
              <Image
                className={styles.malefemale_graph}
                src={member.graph}
                alt=""
                width={300}
                height={300}
              />
              <p className={styles.detail}>{member.detail}</p>
            </div>
          ))}
        </div>
        <div className={styles.memberstory}>
          <Heading2 text="メンバーのお話" />
          {memberStories.map((prop, index) => (
            <MemberStory
              key={index}
              name={prop.name}
              text={prop.text}
              type={prop.type}
              image={prop.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
