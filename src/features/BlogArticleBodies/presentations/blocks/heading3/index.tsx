import { RichText } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
  id: string;
};

export const Heading3Presentation: React.FC<Props> = ({ texts, id }) => {
  if (!texts) return null;
  return (
    <h3 className={`${styles.heading3} "content"`} id={id}>
      <Text richText={texts} />
    </h3>
  );
};
