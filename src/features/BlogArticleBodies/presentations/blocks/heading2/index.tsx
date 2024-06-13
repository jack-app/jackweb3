import { RichText } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
  id: string;
};

export const Heading2Presentation: React.FC<Props> = ({ texts, id }) => {
  if (!texts) return null;
  return (
    <h2 className={`${styles.heading} "content"`} id={id}>
      <Text richText={texts} />
    </h2>
  );
};
