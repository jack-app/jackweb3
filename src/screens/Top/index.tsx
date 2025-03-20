import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
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
      {/* 新歓情報 */}
      <div id="welcome-week-section" className={styles.topContainer}>
        <TopHeading2 title="新歓情報" />
        <div className={styles.topContainerInner}>
          <div className={styles.welcomeWeekStartContainer}>
            <div className={styles.welcomeWeekDescripton}>
              <p className={styles.welcomeWeekTextDetail}>
                新入生の皆さん
                <br />
                ご入学おめでとうございます！ <br /> 大学から新しいことを始めたい <br />
                プログラミングに興味がある <br /> 今流行りのAIに触れたい! <br />
                そんな
                <span className={styles.welcomeWeekText3xl}>みなさん</span>!<br />
                jackの<span className={styles.textOrange}>新歓</span>に足を運んでみませんか？
              </p>
            </div>
            <div className={styles.welcomeWeekVideoContainer}>
              <iframe
                className={styles.welcomeWeekVideo}
                src="https://www.youtube.com/embed/I7Wwjk9cukA?si=EX3ZgrhxSGcb9hqk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.welcomeWeekDateContainer}>
            <span className={styles.welcomeWeekText3xl}>新歓日程</span>
            <div className={styles.welcomeWeekSubContainer}>
              【対面新歓・入退室自由・予約不必要】
              <br />
              下記の時間帯であればお気軽にお立ち寄りください！
              <div className={styles.welcomeWeekDateDetailContainer}>
                <div className={styles.welcomeWeekDay}>
                  <p className={styles.welcomeWeekTextDetail}>
                    <span className={styles.textDetail}> 4/11&#40;金&#41; 17:00-19:30</span>
                    場所未定
                  </p>

                  <p className={styles.welcomeWeekTextDetail}>
                    <span className={styles.textDetail}> 4/16&#40;水&#41; 17:00-19:30</span>
                    場所未定
                  </p>

                  <p className={styles.welcomeWeekTextDetail}>
                    <span className={styles.textDetail}> 4/19&#40;土&#41; 10:00-15:45</span>
                    <Link
                      href="https://www.nskk.org/chubu/nyc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.textBlue}>名古屋学生青年センター</span>
                    </Link>
                  </p>
                </div>
                <div className={styles.welcomeWeekDayDetail}>
                  <p className={styles.welcomeWeekTextDetail}>
                    全日程product展示を行います。
                    <br />
                    <Link href="/products" rel="noopener noreferrer">
                      <span className={styles.textBlue}>プロダクト一覧 </span>
                    </Link>
                    のあのプロダクトも展示されるかも？！
                    <br />
                    <br />
                    11日と16日は日時が変更になる可能性があります。確定次第サイトの更新、Xでの通知をいたしますのでお待ちください。
                    {/* 11日と16日の場所は普段の対面活動の場所です。
                    普段のjackの様子もご覧いただけますので ぜひお気軽に来てください〜 */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.welcomeWeekTextDateContainer}>
            <span className={styles.welcomeWeekText3xl}>jackについてもっと知りたい！</span>
            <div className={styles.welcomeWeekSubContainer}>
              <li>
                FAQページは
                <Link href="/faq" rel="noopener noreferrer">
                  <span className={styles.textBlue}>こちら</span>
                </Link>
              </li>
              <br />
              <li>
                <Link
                  href="https://twitter.com/jack20200001101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.textBlue}>Xのマシュマロ</span>
                </Link>
                で質問対応しています！お気軽にどうぞ！
              </li>
              <br />
              <li>
                個別で連絡を取りたい方は
                <Link href="https://lin.ee/es5kIQR" target="_blank" rel="noopener noreferrer">
                  <span className={styles.textBlue}>公式LINE </span>
                </Link>
                からお願いします &#40;Xの DMでは対応致しかねます&#41;
              </li>
              <br />
            </div>
          </div>

          <div id="join-jack" className={styles.welcomeWeekTextDateContainer}>
            <span className={styles.welcomeWeekText3xl}>jackに入りたい！</span>
            <div className={styles.welcomeWeekSubContainer}>
              確定フォームにご記入のうえ送信いただくと、確定会への参加が可能となります。
              4月23日（水）に対面での確定会を実施いたしますのでご参加ください。
              確定会に参加された時点で正式な入会となりますので、ご注意ください。
              確定会の詳細については、確定フォーム内に記載しております。
              なお、新入生以外の在学生の方もご回答いただけます。
              <div className={styles.welcomeWeekJoin}>
                <IconLink
                  href={JOIN_URL}
                  text="確定フォーム"
                  icon={SlArrowRight}
                  size="l"
                  openInNewTab={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 新歓情報終わり */}
      <div className={styles.topContainer}>
        <TopHeading2 title="活動内容" />
        <div className={styles.topContainerInner}>
          <div className={styles.activitiesContainer}>
            <div className={styles.activitiesTexts}>
              <p className={styles.text3xl}>隔週水曜、金曜で対面活動。</p>
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
            <IconLink href="/activities" text="詳しく見る" icon={SlArrowRight} size="l" />
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
              <div key={member.name}>
                <Image src={member.image} alt={member.name} width={200} height={200} />
                <p className={styles.membersName}>{member.name}</p>
              </div>
            ))}
          </div>
          <IconLink href="/members" text="詳しく見る" icon={SlArrowRight} size="l" />
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
            <IconLink href="/blog" text="記事一覧" icon={SlArrowRight} size="l" />
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
            <div className={styles.calendarList}>
              <MobileCalendar />
            </div>
            <div className={styles.mobileLink}>
              <IconLink
                href={FORM_URL}
                text="見学申し込み"
                icon={SlArrowRight}
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
