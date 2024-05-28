import { type } from "os";
import { Block } from "@/types/block";
import { TocHeading1Presentation } from "../presentations/headings/TocHeading1";
import { TocHeading2Presentation } from "../presentations/headings/TocHeading2";
import { TocHeading3Presentation } from "../presentations/headings/TocHeading3";

export const renderToc = (block: Block, activeId: string) => {
  const type = block.type;
  const isActive = activeId === block.id;
  switch (type) {
    case "heading_1":
      return (
        <TocHeading1Presentation texts={block[type]?.rich_text} id={block.id} isActive={isActive} />
      );
    case "heading_2":
      return (
        <TocHeading2Presentation texts={block[type]?.rich_text} id={block.id} isActive={isActive} />
      );
    case "heading_3":
      return (
        <TocHeading3Presentation texts={block[type]?.rich_text} id={block.id} isActive={isActive} />
      );
    default:
      return null;
  }
};
