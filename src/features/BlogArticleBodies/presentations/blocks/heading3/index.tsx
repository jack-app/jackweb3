import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";

type Props = {
  texts?: RichText[];
};

export const Heading3Presentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <h3>
      <Text text={texts} />
    </h3>
  );
};
