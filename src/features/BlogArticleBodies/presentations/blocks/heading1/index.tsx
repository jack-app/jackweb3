import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
  id: string;
};

export const Heading1Presentation: React.FC<Props> = ({ texts, id }) => {
  if (!texts) return null;
  return (
    <h1 className={styles.heading1} id={id}>
      <Text text={texts} />
    </h1>
  );
};
