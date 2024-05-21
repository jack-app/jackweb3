import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { ActivitiesCarousel } from "@/features/ActivitiesCarousel";
import { Calendar } from "@/ui/Calendar";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import { IconLink } from "@/ui/IconLink";
import { Timeline } from "@/ui/Timeline";
import styles from "./index.module.scss";
{
  /* <meta
  name="viewport"
  content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
></meta>; */
}

type Props = {};

export const ActivitiesScreen: React.FC<Props> = (props) => {
  return (
    <main>
      <div className="activities">
        <Heading1 enTitle="Activities" jaTitle="活動内容" />
        <div className={styles.hoge}>
          <div className={styles.top}>
            <h3 className={styles.text_title}>対面×オンライン</h3>
            <p className={styles.text}>
              週に一度、水曜日か金曜日に対面活動をしています。もちろん、参加は自由です！
              <br />
              また、オンラインでの活動もあるので“予定があってなかなか対面活動にいけない...”という方も安心。
              <br />
              同じ開発チームの仲間たちと集まって作業したり、先輩にプログラミングを基礎から教えてもらったり・・・
              <br />
              jackの仲間たちと一緒に、「やりたいこと」を「やれるように」なってみませんか？
            </p>
          </div>
          <div className={styles.ActivitiesCarousel}>
            <ActivitiesCarousel />
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.Heading2}>
            <Heading2 text="About event" />
          </div>
          {/* <Heading2 text="About event" /> */}
          <div className={styles.timeline}>
            <Timeline />
          </div>
        </div>
        <div className={styles.schedule}>
          <div className={styles.Heading2}>
            <Heading2 text="Schedule" />
          </div>
          <div className={styles.calender}>
            <Calendar />
          </div>
          <div className={styles.schedule_text}>
            <p>
              jackに興味をもってくれた、そこの
              <br />
              あなた！
              <br />
              ぜひ一度、体験してみませんか？
              <br />
              カレンダーに「対面活動」とある日のうち、都合がよい日程で遊びに来てください！
              <br />
            </p>
            <div className={styles.button}>
              <IconLink href="" text="サイト" icon={MdNavigateNext} size="s" openInNewTab />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
