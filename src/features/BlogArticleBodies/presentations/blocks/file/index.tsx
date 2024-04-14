import Link from "next/link";
import { File } from "@/types/block";

/* 
このコンポーネントはおそらく不完全です。
想定されるfile形式が多すぎて、全てを網羅することが難しいです。
一旦ただのリンクを表示するだけになっています。
多分Notionが期限付きのURLを返してきていますが、その処理を書いていません。
**/

type Props = {
  file?: File;
};

export const FilePresentation: React.FC<Props> = ({ file }) => {
  if (!file) return null;
  let src_file = "";
  file.type === "external" && file.external && (src_file = file.external.url);
  file.type === "file" && file.file && (src_file = file.file.url);
  const splitSourceArray = src_file.split("/");
  const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
  const caption_file = file.caption ? file.caption[0]?.plain_text : "";
  return (
    <figure>
      <div>
        📎{" "}
        <Link href={src_file} passHref className="text-link hover:underline break-all">
          {lastElementInArray.split("?")[0]}
        </Link>
      </div>
      {caption_file && <figcaption>{caption_file}</figcaption>}
    </figure>
  );
};
