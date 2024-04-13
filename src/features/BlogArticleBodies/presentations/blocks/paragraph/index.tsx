import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";

type Props = {
  texts?: RichText[];
};

export const ParagraphPresentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <p className="whitespace-pre-wrap">
      <Text text={texts} />
    </p>
  );
};
