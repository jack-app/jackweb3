import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Block } from "@/types/block";

type Props = {
  blocks?: Block[];
  pageId: string;
};

export const NumberedListPresentation: React.FC<Props> = ({ blocks, pageId }) => {
  if (!blocks) return null;
  return (
    <ol className="list-outside list-decimal pl-40 [counter-reset:section]">
      {blocks &&
        blocks.map((block: Block) => {
          return renderBlock(block, pageId);
        })}
    </ol>
  );
};
