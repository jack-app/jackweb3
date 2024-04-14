import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Column, Block } from "@/types/block";

type Props = {
  column?: Column;
  childBlocks?: Block[];
  pageId: string;
};

export const ColumnPresentation: React.FC<Props> = ({ column, childBlocks, pageId }) => {
  if (!column) return null;
  return <div>{childBlocks && childBlocks.map((block: Block) => renderBlock(block, pageId))}</div>;
};
