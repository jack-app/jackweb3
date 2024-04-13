import { Block } from "@/types/block";
import { BulletedListPresentation } from "../presentations/blocks/bulletedList";
import { NumberedListPresentation } from "../presentations/blocks/numberedList";

export const renderNestedList = (block: Block, pageId: string) => {
  const isNumberedList = block.type === "numbered_list_item";

  if (isNumberedList) {
    return <NumberedListPresentation blocks={block.children} pageId={pageId} />;
  }
  return <BulletedListPresentation blocks={block.children} pageId={pageId} />;
};
