import classNames from "classnames";
import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  texts?: RichText[];
  id: string;
};

export const Heading2Presentation: React.FC<Props> = ({ texts, id }) => {
  if (!texts) return null;
  return (
    <h2 className={classNames(styles.heading2, "content")} id={id}>
      <Text text={texts} />
    </h2>
  );
};
