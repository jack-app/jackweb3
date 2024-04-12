import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
};

export const Heading2Presentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <h2 className={styles.heading2}>
      <Text text={texts} />
    </h2>
  );
};
