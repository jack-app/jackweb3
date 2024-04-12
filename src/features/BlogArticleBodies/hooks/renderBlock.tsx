import { Block } from "@/types/block";
import { BookmarkPresentation } from "../presentations/blocks/bookmark";
import { BulletedListPresentation } from "../presentations/blocks/bulletedList";
import { CalloutPresentation } from "../presentations/blocks/callout";
import { ChildPagePresentation } from "../presentations/blocks/childPage";
import { CodePresentation } from "../presentations/blocks/code";
import { ColumnPresentation } from "../presentations/blocks/column";
import { ColumnListPresentation } from "../presentations/blocks/columnList";
import { EquationPresentation } from "../presentations/blocks/equation";
import { FilePresentation } from "../presentations/blocks/file";
import { Heading1Presentation } from "../presentations/blocks/heading1";
import { Heading2Presentation } from "../presentations/blocks/heading2";
import { Heading3Presentation } from "../presentations/blocks/heading3";
import { ImagePresentation } from "../presentations/blocks/image";
import { ListItemPresentation } from "../presentations/blocks/listItem";
import { NumberedListPresentation } from "../presentations/blocks/numberedList";
import { ParagraphPresentation } from "../presentations/blocks/paragraph";
import { QuotePresentation } from "../presentations/blocks/quote";
import { TablePresentation } from "../presentations/blocks/table";
import { ToDoPresentation } from "../presentations/blocks/toDo";
import { TogglePresentation } from "../presentations/blocks/toggle";
import { VideoPresentation } from "../presentations/blocks/video";

export const renderBlock = (block: Block, pageId: string) => {
  // notionのブロックの種類によって、表示を変える
  // ref: https://developers.notion.com/reference/block#block-types-that-support-child-blocks
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return <ParagraphPresentation texts={block[type]?.rich_text} />;
    case "heading_1":
      return <Heading1Presentation texts={block[type]?.rich_text} />;
    case "heading_2":
      return <Heading2Presentation texts={block[type]?.rich_text} />;
    case "heading_3":
      return <Heading3Presentation texts={block[type]?.rich_text} />;
    case "bulleted_list":
      return <BulletedListPresentation blocks={block[type]?.children} pageId={pageId} />;
    case "numbered_list":
      return <NumberedListPresentation blocks={block[type]?.children} pageId={pageId} />;
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <ListItemPresentation block={block} richTexts={block[type]?.rich_text} pageId={pageId} />
      );
    case "to_do":
      return <ToDoPresentation todo={block[type]} id={id} />;
    case "toggle":
      return (
        <TogglePresentation childBlocks={block.children} toggle={block[type]} pageId={pageId} />
      );
    case "child_page":
      return (
        <ChildPagePresentation
          title={block[type]?.title}
          childBlocks={block.children}
          pageId={pageId}
        />
      );
    case "image":
      return <ImagePresentation image={block[type]} id={id} pageId={pageId} />;
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <QuotePresentation texts={block[type]?.rich_text} id={id} />;
    case "code":
      return (
        <CodePresentation
          code={block[type]?.rich_text[0].plain_text}
          language={block[type]?.language}
        />
      );
    case "file":
      return <FilePresentation file={block[type]} />;
    case "bookmark":
      return <BookmarkPresentation href={block[type]?.url} />;
    case "table":
      return <TablePresentation table={block[type]} childBrocks={block.children} />;
    case "column_list": {
      return (
        <ColumnListPresentation
          columnList={block[type]}
          childBlocks={block.children}
          pageId={pageId}
        />
      );
    }
    case "column": {
      return (
        <ColumnPresentation column={block[type]} childBlocks={block.children} pageId={pageId} />
      );
    }
    case "equation":
      return <EquationPresentation math={block[type]?.expression} />;
    case "callout":
      return (
        <CalloutPresentation
          texts={block[type]?.rich_text}
          icon={block[type]?.icon}
          color={block[type]?.color}
        />
      );
    case "video":
      return <VideoPresentation video={block[type]} id={id} />;
    default:
      return null;
  }
};
