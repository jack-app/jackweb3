import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { HiArrowLongDown } from "react-icons/hi2";
import { FORM_URL } from "@/constants";
import { JOIN_URL } from "@/constants";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Calendar } from "@/ui/Calendar";
import { IconLink } from "@/ui/IconLink";
import { MobileCalendar } from "@/ui/MobileCalendar";
import { ProductDetailItem } from "@/ui/ProductDetailItem";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import { TopHeading2 } from "@/ui/TopHeading2";
import styles from "./index.module.scss";
import { memberStories } from "../Members/data";

type Props = {
  articles: ArticleItemProps[];
  product: ProductionProps;
};

export const TopScreen: React.FC<Props> = ({ articles, product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catchcopyWrapper}>
        <div className={styles.catchcopyContainer}>
          <div className={styles.line}>
            <span className={styles.catchcopy1}>
              やりたいこと
              <div className={styles.commentIcon}>
                <Image src={"/eyecatch_comment_icon.png"} alt="" width={150} height={100} />
              </div>
            </span>
            <span className={styles.textGray}>を、</span>
          </div>
          <div className={styles.line}>
            <span className={styles.catchcopy2}>
              やれるように
              <Image
                src={"/eyecatch_dennkyuu_icon.png"}
                alt=""
                width={150}
                height={100}
                className={styles.dennkyuuIcon}
              />
            </span>
            <span className={styles.textGray}>なって、</span>
          </div>

          <div className={styles.line}>
            <span className={styles.catchcopy3}>
              やる
              <Image
                src={"/eyecatch_PC_icon.png"}
                alt=""
                width={150}
                height={100}
                className={styles.PCicon}
              />
              <p className={styles.jack}>jack</p>
            </span>
          </div>
        </div>
        <div className={styles.scrollIcon}>
          <HiArrowLongDown />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackでできること" />
        <div className={styles.topContainerInner}>
          <p className={styles.textDot}>やりたいこと、きっとみつかる。</p>
          <div className={styles.dekirukoto}>
            <p className={styles.textDetail}>
              jackは名古屋の学生によるアプリ開発団体です。
              jackでは開発はもちろん、デザインやチーム開発のマネジメント、イベントの企画・運営などができます！
            </p>
            <div className={styles.dekirukotoPhoto}>
              <Image src={"/dekirukoto.png"} alt="" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="活動内容" />
        <div className={styles.topContainerInner}>
          <div className={styles.activitiesContainer}>
            <div className={styles.activitiesTexts}>
              <p className={styles.text3xl}>隔週水曜、金曜で週一回の対面活動。</p>
              <p className={styles.textDetail}>
                オンラインでの活動もあり。
                <br />
                jackで開催されるイベントについて知りたい方はこちらをチェック！
                <br />
                <Link href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  <span className={styles.textBlue}>見学申し込み</span>
                </Link>
                も受付中！
              </p>
            </div>
            <div className={styles.jackPhoto}>
              <Image src="/jack_集合.jpg" alt="" width={560} height={336} />
            </div>
          </div>
          <div className={styles.activitiesLink}>
            <IconLink href="/activities" text="詳しく見る" icon={FaAngleRight} size="l" />
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackメンバー" />
        <div className={styles.topContainerInner}>
          <p className={styles.memberTextDetail}>
            大学、学部、男女問わず様々なメンバーが在籍しています！
            <br />
            メンバーのインタビューも要チェック！
          </p>
          <div className={styles.membersList}>
            {memberStories.map((member) => (
              <div key={member.name} className={styles.membersImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className={styles.memberImage}
                />
                <p className={styles.membersName}>{member.name}</p>
              </div>
            ))}
          </div>
          <IconLink href="/members" text="詳しく見る" icon={FaAngleRight} size="l" />
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackのプロダクト" />
        <div className={styles.topContainerInner}>
          <div className={styles.productsContainer}>
            <div className={styles.productsDetail}>
              <p className={styles.textDetail}>
                これまでjackメンバーが制作してきたプロダクトを一挙に紹介！
                <br />
                webアプリ、ゲーム・・・
                <br />
                さぁ、キミならどんなものを創る？
              </p>
              <div className={styles.PClink}>
                <IconLink href="/products" text="プロダクト一覧" icon={FaAngleRight} size="l" />
              </div>
            </div>
            {/* Notionからランダムに取得したプロダクト */}

            <div className={styles.production}>
              <ProductDetailItem product={product} />
            </div>
            <div className={styles.mobileLink}>
              <IconLink href="/products" text="プロダクト一覧" icon={FaAngleRight} size="l" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jack-blog" />
        <div className={styles.topContainerInner}>
          <p className={styles.textDetailCenter}>
            jackメンバーによるブログ。
            <br />
            開発秘話やためになる情報がいっぱい。
          </p>
          <p className={styles.text3xlCenter}>最新記事</p>
          {/* Notionからランダムに取得したblog */}
          <div className={styles.articles}>
            {articles.map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))}
          </div>
          <div className={styles.article}>
            <ArticleItem key={articles[0].id} {...articles[0]} />
          </div>
          <div className={styles.articleLink}>
            <IconLink href="/blog" text="記事一覧" icon={FaAngleRight} size="l" />
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="見学申し込み" />
        <div className={styles.topContainerInner}>
          <div className={styles.calendarContainer}>
            <div>
              <p className={styles.calendarText}>
                jackに興味をもってくれた、そこの
                <span className={styles.calendarText3xl}>あなた</span>！<br />
                ぜひ一度、<span className={styles.textOrange}>見学</span>してみませんか？
              </p>
              <p className={styles.calendarTextDetail}>
                カレンダーに「対面活動」とある日のうち、都合がよい日程で見学申し込みをしてください！
              </p>
              <div className={styles.PClink}>
                <IconLink
                  href={FORM_URL}
                  text="見学申し込み"
                  icon={FaAngleRight}
                  size="l"
                  openInNewTab={true}
                />
              </div>
            </div>

            <div className={styles.calendar}>
              <Calendar />
            </div>
            <div className={styles.calendarList}>
              <MobileCalendar />
            </div>
            <div className={styles.mobileLink}>
              <IconLink
                href={FORM_URL}
                text="見学申し込み"
                icon={FaAngleRight}
                size="l"
                openInNewTab={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
