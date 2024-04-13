import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Block } from "@/types/block";

type Props = {
  blocks?: Block[];
  pageId: string;
};

export const BulletedListPresentation: React.FC<Props> = ({ blocks, pageId }) => {
  if (!blocks) return null;
  return (
    <ul className="list-outside list-disc pl-40">
      {blocks &&
        blocks.map((block: Block) => {
          return renderBlock(block, pageId);
        })}
    </ul>
  );
};
