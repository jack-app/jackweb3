import Image from "next/image";
import { Image as ImageBlock } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  image?: ImageBlock;
  id: string;
  pageId: string;
};

export const ImagePresentation: React.FC<Props> = ({ image, id, pageId }) => {
  if (!image) return null;

  const src = image.type === "external" ? image.external?.url : image.file?.url;
  if (!src) return null;

  const width = image.width;
  const height = image.height;

  const caption = image.caption ? image.caption[0]?.plain_text : "";
  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrapper} style={{ aspectRatio: `${width} / ${height}` }}>
        <Image
          className={styles.image}
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 1023px) 100vw, 800px"
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
