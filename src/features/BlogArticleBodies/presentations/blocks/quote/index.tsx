import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { RichText } from "@/types/block";

type Props = {
  texts?: RichText[];
  id: string;
};

export const QuotePresentation: React.FC<Props> = ({ texts, id }) => {
  if (!texts) return null;
  return (
    <blockquote key={id} className="border-gray-300 border-s-4 p-40 italic">
      <Text text={texts} />
    </blockquote>
  );
};
