import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";

type Props = {
  texts?: RichText[];
};

export const Heading2Presentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <h2>
      <Text text={texts} />
    </h2>
  );
};
