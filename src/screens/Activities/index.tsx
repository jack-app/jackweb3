import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { ActivitiesCarousel } from "@/features/ActivitiesCarousel";
import { Calendar } from "@/ui/Calendar";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import { IconLink } from "@/ui/IconLink";
import { MobileCalendar } from "@/ui/MobileCalendar";
import { Timeline } from "@/ui/Timeline";
import styles from "./index.module.scss";

type Props = {};

export const ActivitiesScreen: React.FC<Props> = (props) => {
  return (
    <main>
      <Heading1 enTitle="Activities" jaTitle="活動内容" />
      <div className={styles.activities}>
        <h2 className={styles.text_title}>対面×オンライン</h2>
        <div className={styles.outline}>
          <div className={styles.top}>
            <p className={styles.text}>
              週に一度、水曜日か金曜日に対面活動をしています。もちろん、参加は自由です！
              <br />
              また、オンラインでの活動もあるので“予定があってなかなか対面活動にいけない...”という方も安心。
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
          <div className={styles.timeline}>
            <Timeline />
          </div>
        </div>
        <div className={styles.schedule}>
          <div className={styles.Heading2}>
            <Heading2 text="Schedule" />
          </div>
          <div className={styles.schedule_content}>
            <div className={styles.schedule_text}>
              <p>
                jackに興味をもってくれた、そこの
                <br />
                <span className={styles.anata}>あなた</span>！
                <br />
                ぜひ一度、<span className={styles.taiken}>見学</span>してみませんか？
                <br />
                カレンダーに「対面活動」とある日のうち、都合がよい日程で遊びに来てください！
                <br />
              </p>
              <div className={styles.pcButton}>
                <IconLink
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
                  text="見学応募はこちら"
                  icon={MdNavigateNext}
                  size="l"
                  openInNewTab
                />
              </div>
            </div>
            <div className={styles.calendar}>
              <Calendar />
            </div>
            <div className={styles.calendarList}>
              <MobileCalendar />
            </div>
          </div>
          <div className={styles.mobileButton}>
            <IconLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
              text="見学応募はこちら"
              icon={MdNavigateNext}
              size="s"
              openInNewTab
            />
          </div>
        </div>
      </div>
    </main>
  );
};
