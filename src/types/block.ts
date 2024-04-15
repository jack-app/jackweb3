// 参考：https://developers.notion.com/reference/block

export type Database = {
  title: string;
  description: string;
  icon: FileObject | Emoji | null;
  cover: FileObject | null;
};

export type Post = {
  page_id: string;
  title: string;
  icon: FileObject | Emoji | null;
  cover: FileObject | null;
  slug: string;
  date: string;
  tags: SelectProperty[];
  excerpt: string;
  featured_image: FileObject | null;
  rank: number;
};

export type Block = {
  id: string;
  type: string;
  has_children: boolean;
  paragraph?: Paragraph;
  heading_1?: Heading1;
  heading_2?: Heading2;
  heading_3?: Heading3;
  bulleted_list?: BulletedList;
  numbered_list?: NumberedList;
  bulleted_list_item?: BulletedListItem;
  numbered_list_item?: NumberedListItem;
  to_do?: ToDo;
  image?: Image;
  file?: File;
  code?: Code;
  quote?: Quote;
  equation?: Equation;
  callout?: Callout;
  synced_block?: SyncedBlock;
  toggle?: Toggle;
  child_page: ChildPage;
  embed?: Embed;
  video?: Video;
  bookmark?: Bookmark;
  link_preview?: LinkPreview;
  table?: Table;
  column_list?: ColumnList;
  column: Column;
  table_of_contents?: TableOfContents;
  link_to_page?: LinkToPage;
  children?: Block[];
};

export type Paragraph = {
  rich_text: RichText[];
  color: string;
  children?: Block[];
};

export type Heading1 = {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
  children?: Block[];
};

export type Heading2 = {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
  children?: Block[];
};

export type Heading3 = {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
  children?: Block[];
};

export type BulletedList = {
  children: Block[];
};

export type NumberedList = {
  children: Block[];
};

export type BulletedListItem = {
  rich_text: RichText[];
  color: string;
  children?: Block[];
};

export type NumberedListItem = {
  rich_text: RichText[];
  color: string;
  children?: Block[];
};

export type ToDo = {
  rich_text: RichText[];
  checked: boolean;
  color: string;
  children?: Block[];
};

export type Image = {
  caption: RichText[];
  type: string;
  file?: FileObject;
  external?: External;
  width?: number;
  height?: number;
};

export type Video = {
  caption: RichText[];
  type: string;
  external?: External;
};

export type File = {
  caption: RichText[];
  type: string;
  file?: FileObject;
  external?: External;
};

export type FileObject = {
  type: string;
  url: string;
  expiry_time?: string;
};

export type External = {
  url: string;
};

export type Code = {
  caption: RichText[];
  rich_text: RichText[];
  language: string;
};

export type Quote = {
  rich_text: RichText[];
  color: string;
  children?: Block[];
};

export type Equation = {
  expression: string;
};

export type Callout = {
  rich_text: RichText[];
  icon: FileObject | Emoji | null;
  color: string;
  children?: Block[];
};

export type SyncedBlock = {
  synced_from: SyncedFrom | null;
  children?: Block[];
};

export type SyncedFrom = {
  blockId: string;
};

export type Toggle = {
  rich_text: RichText[];
  color: string;
  children: Block[];
};

export type ChildPage = {
  title: string;
};

export type Embed = {
  url: string;
};

export type Bookmark = {
  url: string;
};

export type LinkPreview = {
  url: string;
};

export type Table = {
  table_width: number;
  has_column_header: boolean;
  has_row_header: boolean;
  rows: TableRow[];
};

export type TableRow = {
  id: string;
  type: string;
  has_children: boolean;
  cells: TableCell[];
};

export type TableCell = {
  rich_text: RichText[];
};

export type ColumnList = {
  columns: Column[];
};

export type Column = {
  id: string;
  type: string;
  has_children: boolean;
  children: Block[];
};

export type List = {
  type: string;
  listItems: Block[];
};

export type TableOfContents = {
  color: string;
};

export type RichText = {
  text?: Text;
  annotations: Annotations;
  plain_text: string;
  href?: string;
  equation?: Equation;
  mention?: Mention;
};

export type Text = {
  content: string;
  link?: Link;
};

export type Emoji = {
  type: string;
  emoji: string;
};

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export type Link = {
  url: string;
};

export type SelectProperty = {
  id: string;
  name: string;
  color: string;
};

export type LinkToPage = {
  type: string;
  page_id: string;
};

export type Mention = {
  type: string;
  page?: Reference;
};

export type Reference = {
  id: string;
};
