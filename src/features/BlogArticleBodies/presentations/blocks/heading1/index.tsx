import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
};

export const Heading1Presentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <h1 className={styles.heading1}>
      <Text text={texts} />
    </h1>
  );
};
