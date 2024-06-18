import React from "react";
import { PieChartComponent } from "@/features/PieChart";
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
        <p className={styles.allnum}>
          全体人数：約<span>70</span>人
        </p>
        <div className={styles.graph}>
          {Members.map((member, index) => (
            <div className={styles.graphcontent} key={index}>
              <h2 className={styles.title}>{member.title}</h2>
              <PieChartComponent
                data={member.graph}
                cx={0}
                cy={0}
                innerRadius={0}
                outerRadius={0}
                midAngle={0}
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
