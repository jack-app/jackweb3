type ScheduleItem = {
  title: string;
  description: string;
  image: string;
};

export const schedule: ScheduleItem[] = [
  {
    title: "4月 新歓",
    description:
      "jackメンバーが作成したプロダクトを新入生のみなさんに紹介します。体験もできるかも…？！",
    image: "/新歓.jpg",
  },
  {
    title: "5月 jack hack",
    description: "2~3日でチームでアプリを開発してみよう。君のアプリは一番人気を勝ち取れるか！？",
    image: "/jackHack.jpg",
  },
  {
    title: "6月 名大祭",
    description: "チームで制作したアプリやゲームを展示します。実際にお客さんに遊んでもらおう！",
    image: "https://placehold.jp/300x180.png",
  },
  {
    title: "8月 アイデアソン",
    description:
      "チームで協力して、お題に沿った新しいアプリのアイデアを出し合おう。君のアイデアを待ってるよ！",
    image: "/アイデアソン.jpg",
  },
  {
    title: "12月 jack fes",
    description: "さぁ、一年の集大成を発表しよう！努力の証をここに残そう。",
    image: "/jackFes.jpg",
  },
];
