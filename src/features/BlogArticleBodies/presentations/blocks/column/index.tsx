import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Column, Block } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  column?: Column;
  childBlocks?: Block[];
  pageId: string;
};

export const ColumnPresentation: React.FC<Props> = ({ column, childBlocks, pageId }) => {
  if (!column) return null;
  return (
    <div className={styles.column}>
      {childBlocks && childBlocks.map((block: Block) => renderBlock(block, pageId))}
    </div>
  );
};
