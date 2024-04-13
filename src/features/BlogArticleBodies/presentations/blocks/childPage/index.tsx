import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Block } from "@/types/block";
import styles from "./index.module.css";

type Props = {
  title?: string;
  childBlocks?: Block[];
  pageId: string;
};

export const ChildPagePresentation: React.FC<Props> = ({ title, childBlocks, pageId }) => {
  if (!title) return null;
  return (
    <div className={styles.childPage}>
      <strong>{title}</strong>
      {childBlocks && childBlocks.map((block: Block) => renderBlock(block, pageId))}
    </div>
  );
};
