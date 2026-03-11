import Image from "next/image";
import { Image as ImageBlock } from "@/types/block";

type Props = {
  image?: ImageBlock;
  id: string;
  pageId: string;
};

export const ImagePresentation: React.FC<Props> = ({ image, id, pageId }) => {
  if (!image) return null;

  const src = image.type === "external" ? image.external?.url : image.file?.url;
  if (!src) return null;

  const caption = image.caption ? image.caption[0]?.plain_text : "";
  return (
    <figure className="mx-auto m-8 w-full  max-w-[800px]">
      <Image
        src={src}
        alt={caption}
        width={1200}
        height={1200}
        sizes="(max-width: 1023px) 100vw, 800px"
        style={{ width: "100%", height: "auto" }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
