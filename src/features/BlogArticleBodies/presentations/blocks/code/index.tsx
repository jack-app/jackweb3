import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  code?: string;
  language?: string;
};

export const CodePresentation: React.FC<Props> = ({ code, language }) => {
  if (!code) return null;
  return (
    <SyntaxHighlighter
      language={language}
      style={nord}
      className="text-[14px] [&>code]:block [&>code]:w-[0px]"
    >
      {code}
    </SyntaxHighlighter>
  );
};
