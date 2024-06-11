import { RichText } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";

type Props = {
  texts?: RichText[];
};

export const ParagraphPresentation: React.FC<Props> = ({ texts }) => {
  if (!texts) return null;
  return (
    <p className="whitespace-pre-wrap">
      <Text richText={texts} />
    </p>
  );
};
