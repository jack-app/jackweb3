import { renderNestedList } from "@/features/BlogArticleBodies/hooks/renderNestedList";
import { Block, RichText } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";

type Props = {
  block: Block;
  richTexts?: RichText[];
  pageId: string;
};

export const ListItemPresentation: React.FC<Props> = ({ block, richTexts, pageId }) => {
  if (!richTexts) return null;
  return (
    <li key={block.id}>
      <Text richText={richTexts} />
      {block.has_children && renderNestedList(block, pageId)}
    </li>
  );
};
