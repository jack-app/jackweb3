import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Calendar } from "@/ui/Calendar";
import { IconLink } from "@/ui/IconLink";
import { ProductDetailItem } from "@/ui/ProductDetailItem";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import { TopHeading2 } from "@/ui/TopHeading2";
import styles from "./index.module.scss";
import { memberStories } from "../Members/data";

type Props = {
  articles: ArticleItemProps[];
  article: ArticleItemProps;
  product: ProductionProps;
};

export const TopScreen: React.FC<Props> = ({ articles, article, product }) => {
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
          <div className={styles.line3}>
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
        </div>
        <div className={styles.mark}>
          <Image src={"/mark .png"} alt="" width={80} height={80} />
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackでできること" subTitle="iroriodekiruyo" />
        <div className={styles.dekirukotoContainer}>
          <p className={styles.textDot}>やりたいこと、きっとみつかる。</p>
          <div className={styles.dekirukoto}>
            <p className={styles.textDetail}>
              jackでできることは多種多様。開発はもちろん、デザインやチーム開発のマネジメント、イベントの企画・運営まで。
            </p>
            <div className={styles.dekirukotoPhoto}>
              <Image src={"/Top_jackdedekirukoto.png"} alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="活動内容" subTitle="jack-activities" />
        <div className={styles.activitiesContainer}>
          <div>
            <p className={styles.text3xl}>隔週水曜、金曜で対面活動。</p>
            <p className={styles.textDetail}>
              オンラインでの活動もあり。
              <br />
              jackで開催されるイベントについて知りたい方はこちらをチェック！
              <br />
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.textBlue}>見学申し込み</span>
              </Link>
              も受付中！
            </p>
          </div>
          <div className={styles.jackPhoto}>
            <Image src="/jack_photo.png" alt="" width={560} height={336} />
          </div>
        </div>
        <div className={styles.link}>
          <IconLink href="/activities" text="詳しくはこちら" icon={SlArrowRight} size="l" />
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackメンバー" subTitle="jack-members" />
        <div className={styles.membersContainer}>
          <p className={styles.textDetailCenter}>
            大学、学部、男女問わず様々なメンバーが在籍しています！
            <br />
            メンバーのインタビューも要チェック！
          </p>
          <div className={styles.membersList}>
            {memberStories.map((member) => (
              <div key={member.name} className={styles.member}>
                <Image src={member.image} alt={member.name} width={200} height={200} />
                <p className={styles.membersName}>{member.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.link}>
            <IconLink href="/members" text="詳しくはこちら" icon={SlArrowRight} size="l" />
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jackのプロダクト" subTitle="jack-products" />
        <div className={styles.productsContainer}>
          <div>
            <p className={styles.textDetail}>
              これまでjackメンバーが制作してきたプロダクトを一挙に紹介！
              <br />
              webアプリ、ゲーム・・・
              <br />
              さぁ、キミならどんなものを創る？
            </p>
            <div className={styles.PClink}>
              <IconLink href="/products" text="プロダクト一覧" icon={SlArrowRight} size="l" />
            </div>
          </div>
          {/* Notionからランダムに取得したプロダクト */}

          <div className={styles.production}>
            <ProductDetailItem product={product} />
          </div>
          <div className={styles.mobileLink}>
            <IconLink href="/products" text="プロダクト一覧" icon={SlArrowRight} size="l" />
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="jack-blog" subTitle="jack-blog" />
        <div className={styles.blogContainer}>
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
            <ArticleItem key={article.id} {...article} />
          </div>
          <div className={styles.link}>
            <IconLink href="/blog" text="記事一覧" icon={SlArrowRight} size="l" />
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <TopHeading2 title="見学応募" subTitle="calendar" />
        <div className={styles.calendarContainer}>
          <div>
            <p className={styles.calendarText}>
              jackに興味をもってくれた、そこの
              <br />
              <span className={styles.calendarText3xl}>あなた</span>！<br />
              ぜひ一度、<span className={styles.textOrange}>見学</span>してみませんか？
            </p>
            <p className={styles.calendarTextDetail}>
              カレンダーに「対面活動」とある日のうち、都合がよい日程で遊びに来てください！
            </p>
            <div className={styles.PClink}>
              <IconLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
                text="見学応募はこちら"
                icon={SlArrowRight}
                size="l"
                openInNewTab={true}
              />
            </div>
          </div>
          {/* カレンダー */}
          <div className={styles.calendar}>
            <Calendar />
          </div>
          <div className={styles.mobileLink}>
            <IconLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
              text="見学応募はこちら"
              icon={SlArrowRight}
              size="l"
              openInNewTab={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
