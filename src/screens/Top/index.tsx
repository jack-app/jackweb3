import Image from "next/image";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { IconLink } from "@/ui/IconLink";
import { TopHeading2 } from "@/ui/TopHeading2";
import styles from "./index.module.scss";
import { memberStories } from "../Members/data";

type Props = {};

export const TopScreen: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catchcopy_wrapper}>
        <div className={styles.catchcopy_container}>
          <div className={styles.line}>
            <span className={styles.catchcopy1}>
              やりたいこと
              <div className={styles.comment_icon}>
                <Image src={"/eyecatch_comment_icon.png"} alt="" width={150} height={100} />
              </div>
            </span>

            <span className={styles.text_gray}>を、</span>
          </div>

          <div className={styles.line}>
            <span className={styles.catchcopy2}>
              やれるように
              <Image
                src={"/eyecatch_dennkyuu_icon.png"}
                alt=""
                width={150}
                height={100}
                className={styles.dennkyuu_icon}
              />
            </span>
            <span className={styles.text_gray}>なって、</span>
          </div>

          <div className={styles.line3}>
            <div className={styles.line}>
              <span className={styles.catchcopy3}>
                やる
                <Image
                  src={"/eyecatch_PC_icon.png"}
                  alt=""
                  width={150}
                  height={100}
                  className={styles.PC_icon}
                />
                <p className={styles.catchcopy_jack}>jack</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.Mark}>
          <Image src={"/mark .png"} alt="" width={80} height={80} />
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="jackでできること" subTitle="iroriodekiruyo" />
        <div className={styles.jackdedekirukoto_container}>
          <p className={styles.text_dot}>やりたいこと、きっとみつかる。</p>
          <div className={styles.jackdedekirukoto}>
            <p className={styles.text_detail}>
              jackでできることは多種多様。開発はもちろん、デザインやチーム開発のマネジメント、イベントの企画・運営まで。
            </p>
            <div className={styles.jackdedekirukoto_photo}>
              <Image src={"/Top_jackdedekirukoto.png"} alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="活動内容" subTitle="jack-activities" />
        <div className={styles.activities_container}>
          <div>
            <p className={styles.text_3xl}>隔週水曜、金曜で対面活動。</p>
            <p className={styles.text_detail}>
              オンラインでの活動もあり。
              <br />
              jackで開催されるイベントについて知りたい方はこちらをチェック！
              <br />
              <span className={styles.text_blue}>見学申し込み</span>も受付中！
            </p>
          </div>

          <div className={styles.jack_photo}>
            <Image src="/jack_photo.png" alt="" width={560} height={336} />
          </div>
        </div>
        <div className={styles.link}>
          <IconLink href="/activities" text="詳しくはこちら" icon={SlArrowRight} size="l" />
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="jackメンバー" subTitle="jack-members" />
        <div className={styles.members_container}>
          <p className={styles.text_detail_center}>
            大学、学部、男女問わず様々なメンバーが在籍しています！
            <br />
            メンバーのインタビューも要チェック！
          </p>

          <div className={styles.members_list}>
            {memberStories.map((member) => (
              <div key={member.name} className={styles.member}>
                <Image src={member.image} alt={member.name} width={200} height={200} />
                <p className={styles.members_name}>{member.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.link}>
            <IconLink href="/members" text="詳しくはこちら" icon={SlArrowRight} size="l" />
          </div>
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="jackのプロダクト" subTitle="jack-products" />
        <div className={styles.products_container}>
          <div>
            <p className={styles.text_detail}>
              これまでjackメンバーが制作してきたプロダクトを一挙に紹介！
              <br />
              webアプリ、ゲーム・・・
              <br />
              さぁ、キミならどんなものを創る？
            </p>
            {/* <div className={styles.link}>
            <IconLink
              href="/products"
              text="プロダクト一覧"
              icon={SlArrowRight}
              size="l"
            /> */}
          </div>

          {/* Notionからランダムに取得したプロダクト */}
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="jack-blog" subTitle="jack-blog" />
        <div className={styles.blog_container}>
          <p className={styles.text_detail_center}>
            jackメンバーによるブログ。
            <br />
            開発秘話やためになる情報がいっぱい。
          </p>
          <p className={styles.text_3xl_center}>最新記事</p>

          {/* Notionからランダムに取得したblog */}

          <div className={styles.link}>
            <IconLink href="/blog" text="記事一覧" icon={SlArrowRight} size="l" />
          </div>
        </div>
      </div>

      <div className={styles.Top_container}>
        <TopHeading2 title="見学応募" subTitle="calender" />
        <div className={styles.calender_container}>
          <div>
            <p className={styles.calender_text}>
              jackに興味をもってくれた、そこの
              <br />
              <span className={styles.calender_text_3xl}>あなた</span>！<br />
              ぜひ一度、<span className={styles.text_orange}>見学</span>してみませんか？
            </p>
            <p className={styles.calender_text_detail}>
              カレンダーに「対面活動」とある日のうち、都合がよい日程で遊びに来てください！
            </p>
            <div className={styles.link}>
              <IconLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
                text="見学応募はこちら"
                icon={SlArrowRight}
                size="l"
              />
            </div>
          </div>

          {/* カレンダー */}
        </div>
      </div>
    </div>
  );
};
