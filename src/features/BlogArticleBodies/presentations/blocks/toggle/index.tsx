import { Fragment } from "react";
import { renderBlock } from "@/features/BlogArticleBodies/hooks/renderBlock";
import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { Toggle, Block } from "@/types/block";

type Props = {
  childBlocks?: Block[];
  toggle?: Toggle;
  pageId: string;
};

export const TogglePresentation: React.FC<Props> = ({ childBlocks, toggle, pageId }) => {
  if (!toggle || !childBlocks) return null;
  return (
    <details>
      <summary>
        <Text text={toggle.rich_text} />
      </summary>
      {childBlocks?.map((child: Block) => (
        <Fragment key={child.id}>{renderBlock(child, pageId)}</Fragment>
      ))}
    </details>
  );
};
