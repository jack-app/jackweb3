import React from 'react';
import styles from './index.module.scss';
import { Heading1 } from "@/ui/Heading1"
import { Heading2 } from "@/ui/Heading2"
import { Accordion } from "@/ui/Accordion"
import { Footer } from "@/ui/Footer"

type Props = {};

export const FaqScreen: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <Heading1 enTitle="FAQ" jaTitle="よくあるご質問" />
      </div>
      <div className={styles.faq}>
        <div className={styles.about}>
          <Heading2 text="入部について" />
          <div className={styles.content}>
            <Accordion question="未経験でも大丈夫ですか？" answer="大丈夫です！多くのjackメンバーが初心者の状態で加入しています。" />
            <Accordion question="1年生以外からでも入れますか？" answer="もちろん大歓迎です！中には4年生や修士から入ったメンバーもいます！" />
            <Accordion question="jackに入るのに何か条件はありますか？" answer="入会にあたって、必要な条件は一切ありません！" />
            <Accordion question="名古屋大学以外の学生でもjackに入れますか？" answer="入れます！ 実際に南山大学、名城大学、名古屋市立大学、椙山女学園大学の学生もjackにいます！(2024.4現在)" />
            <Accordion question="年会費はいつ払いますか？" answer="毎年年末に行われるjackFesというイベントで集めます！" />
            <Accordion question="兼サー、兼部は可能ですか？" answer="兼サー、兼部OKです！ 実際に兼サークルしているメンバーもいます。" />
          </div>
        </div>
        <div className={styles.about}>
          <Heading2 text="活動について" />
          <div className={styles.content}>
            <Accordion question="どのくらいの頻度で活動に参加する必要がありますか？" answer="メンバーによって参加頻度はまちまちです。毎週参加する人もいれば、月1程度の人もいれば、年1の発表会だけ参加する人もいます。みんなjackメンバーです。" />
            <Accordion question="プログラミングを教えてくれますか？" answer="基本的に講習会などは行っていません。基本的には個人やチームで調べて作っていきます。もしわからないことがあれば、メンバーに質問すれば答えてくれますよ！" />
            <Accordion question="どの言語を使って開発していますか？" answer="各々の作りたいものに合った言語を使用しています。ゲーム開発であればUnity C#, web開発ならHTML, CSS, javascriptなど、各々の好きな言語を使っています。" />
            <Accordion question="年会費はいくらですか？何に使いますか？" answer="年会費は2000円です。AppStoreへのアプリリリース、イベントの会場費に使います。" />
            <Accordion question="年会費はいつ払いますか？" answer="毎年年末に行われるjackFesというイベントで集めます！" />
            <Accordion question="作ってほしいアプリがあるのですが..." answer="製作依頼は受け付けていません。ただし、メンバーを誘って一緒に作るのは大歓迎です！" />
          </div>
        </div>
        <div className={styles.about}>
          <Heading2 text="メンバーについて" />
          <div className={styles.content}>
            <Accordion question="現在jackに何人所属していますか？" answer="約70人です。" />
            <Accordion question="男女比はどれくらいですか？" answer="2024.4月現在は男女比が約6:1です！年々女子率は上がって来てる気がします。" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};