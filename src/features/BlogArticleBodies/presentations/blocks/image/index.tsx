import Image from "next/image";
import { Image as ImageBlock } from "@/types/block";

type Props = {
  image?: ImageBlock;
  id: string;
  pageId: string;
};

export const ImagePresentation: React.FC<Props> = ({ image, id, pageId }) => {
  if (!image) return null;
  let src = "";
  image.type === "external" && image.external && (src = image.external.url);
  image.type === "file" && image.file && (src = image.file?.url);

  const caption = image.caption ? image.caption[0]?.plain_text : "";
  return (
    <figure className="mx-auto">
      <Image src={src} alt={caption} width={500} height={500} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
