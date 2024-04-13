import { renderNestedList } from "@/features/BlogArticleBodies/hooks/renderNestedList";
import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { Block, RichText } from "@/types/block";

type Props = {
  block: Block;
  richTexts?: RichText[];
  pageId: string;
};

export const ListItemPresentation: React.FC<Props> = ({ block, richTexts, pageId }) => {
  if (!richTexts) return null;
  return (
    <li key={block.id}>
      <Text text={richTexts} />
      {block.has_children && renderNestedList(block, pageId)}
    </li>
  );
};
