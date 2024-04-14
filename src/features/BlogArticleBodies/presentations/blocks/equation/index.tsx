import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

type Props = {
  math?: string;
};

export const EquationPresentation: React.FC<Props> = ({ math }) => {
  if (!math) return null;
  return <BlockMath math={math} />;
};
