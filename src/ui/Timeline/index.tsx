import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

type Props = {};

export const Timeline: React.FC<Props> = (Props) => {
  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.timeline__item}>
          <div className={styles.timeline__inner}>
            <Image
              className={styles.item_img}
              src={"https://placehold.jp/300x180.png"}
              alt=""
              width={300}
              height={180}
            />
            <div className={styles.timeline__text}>
              <h3>4月 新歓</h3>
              <p>
                jackメンバーが作成したプロダクトを新入生のみなさんに紹介します。体験もできるかも…？！
              </p>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.timeline__item}>
          <div className={styles.timeline__inner}>
            <Image
              className={styles.item_img}
              src={"https://placehold.jp/300x180.png"}
              alt=""
              width={300}
              height={180}
            />
            <div className={styles.timeline__text}>
              <h3>5月 jack hack</h3>
              <p>2~3日でチームでアプリを開発してみよう。君のアプリは一番人気を勝ち取れるか！？</p>
              <div className={styles.bar2}></div>
            </div>
          </div>
        </div>
        <div className={styles.timeline__item}>
          <div className={styles.timeline__inner}>
            <Image
              className={styles.item_img}
              src={"https://placehold.jp/300x180.png"}
              alt=""
              width={300}
              height={180}
            />
            <div className={styles.timeline__text}>
              <h3>6月 名大祭</h3>
              <p>チームで制作したアプリやゲームを展示します。実際にお客さんに遊んでもらおう！</p>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.timeline__item}>
          <div className={styles.timeline__inner}>
            <Image
              className={styles.item_img}
              src={"https://placehold.jp/300x180.png"}
              alt=""
              width={300}
              height={180}
            />
            <div className={styles.timeline__text}>
              <h3>8月 アイデアソン</h3>
              <p>
                チームで協力して、お題に沿った新しいアプリのアイデアを出し合おう。君のアイデアを待ってるよ！
              </p>
              <div className={styles.bar2}></div>
            </div>
          </div>
        </div>
        <div className={styles.timeline__item}>
          <div className={styles.timeline__inner}>
            <Image
              className={styles.item_img}
              src={"https://placehold.jp/300x180.png"}
              alt=""
              width={300}
              height={180}
            />
            <div className={styles.timeline__text}>
              <h3>12月 jack fes</h3>
              <p>さぁ、一年の集大成を発表しよう！努力の証をここに残そう。</p>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.triangle}></div>
      </div>
    </>
  );
};
