import { Image } from "@/types/block";
import createImage from "@/utils/createImage";

type Props = {
  image?: Image;
  id: string;
  pageId: string;
};

export const ImagePresentation: React.FC<Props> = async ({ image, id, pageId }) => {
  if (!image) return null;
  let src = "";
  image.type === "external" && image.external && (src = image.external.url);
  image.type === "file" && image.file && (src = await createImage(pageId, id, image.file.url));

  const caption = image.caption ? image.caption[0]?.plain_text : "";
  return (
    <figure className="mx-auto">
      <img src={src} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
