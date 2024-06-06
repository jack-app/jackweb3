import { Block } from "@/types/block";
import { TocHeadingPresentation } from "../presentations/TocHeading";

const headings = ["heading_1", "heading_2", "heading_3"] as const;
type HeadingType = (typeof headings)[number];

const isHeadingType = (type: string): type is HeadingType => {
  return headings.includes(type as HeadingType);
};

export const renderToc = (block: Block, activeId: string) => {
  const type = block.type;
  const isActive = activeId === block.id;

  if (!isHeadingType(type)) {
    return null;
  }
  return (
    <TocHeadingPresentation
      texts={block[type]?.rich_text}
      id={block.id}
      isActive={isActive}
      type={type}
    />
  );
};
