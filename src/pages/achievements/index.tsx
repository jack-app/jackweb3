import { AchievementsScreen } from "@/screens/Achievements";
import { Props as AchievementItemProps } from "@/ui/AchievementItem";
import cacheRemoteImage from "@/utils/cacheRemoteImage";
import { Meta } from "@/utils/meta";
import { getDatabase } from "@/utils/notion";

export default function Achievements({ achievements }: { achievements: AchievementItemProps[] }) {
  return (
    <>
      <Meta title="活動実績" />
      <AchievementsScreen achievements={achievements} />
    </>
  );
}
export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_ACHIEVEMENTS_DATABASE_ID;
  const achievementDb = await getDatabase(databaseId);
  const achievements = await Promise.all(
    achievementDb.map(async (achievement: any) => {
      const res = {
        id: achievement.id,
        image: { url: "", width: undefined, height: undefined },
        date: achievement.properties.Date.date.start,
        text: achievement.properties.Name.title[0]?.plain_text || null,
        article_href: achievement.properties.Article.url || null,
        web_href: achievement.properties.WebLink.url || null,
        app_href: achievement.properties.AppStore.url || null,
        google_href: achievement.properties.GooglePlayStore.url || null,
        git_href: achievement.properties.GitHub.url || null,
      } as AchievementItemProps;

      // 画像
      if (achievement.properties.Image.files && achievement.properties.Image.files.length > 0) {
        if (achievement.properties.Image.files[0].file?.url) {
          if (!achievement.cover) {
            const imageData = await cacheRemoteImage(
              achievement.id,
              "cover",
              achievement.properties.Image.files[0].file.url,
            );
            res.image.url = imageData.url;
            res.image.width = imageData.width;
            res.image.height = imageData.height;
          } else if (achievement.cover.type === "file") {
            const imageData = await cacheRemoteImage(
              achievement.id,
              "cover",
              achievement.cover.file.url,
            );
            res.image.url = imageData.url;
            res.image.width = imageData.width;
            res.image.height = imageData.height;
          } else if (achievement.cover.type === "external") {
            res.image = achievement.cover.external.url;
          }
        }
      }
      return res;
    }),
  );
  return {
    props: {
      achievements,
    },
  };
};
