import { Block } from "@/types/block";
import { TocHeadingPresentation } from "../presentations/TocHeading";

export const renderToc = (block: Block, activeId: string) => {
  const type = block.type;
  const isActive = activeId === block.id;

  if (type === "heading_1" || type === "heading_2" || type === "heading_3") {
    return (
      <TocHeadingPresentation
        texts={block[type]?.rich_text}
        id={block.id}
        isActive={isActive}
        type={type}
      />
    );
  }
  return null;
};
