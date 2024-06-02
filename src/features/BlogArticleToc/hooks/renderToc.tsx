import { Block } from "@/types/block";
import { TocHeadingPresentation } from "../presentations/TocHeading";

type HeadingType = "heading_1" | "heading_2" | "heading_3";

const isHeadingType = (type: string): type is HeadingType => {
  return type === "heading_1" || type === "heading_2" || type === "heading_3";
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
