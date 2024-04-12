// ライブラリがes modulesに対応していないため、node_modulesから直接importしている
import SyntaxHighlighter from "../../../../../../node_modules/react-syntax-highlighter/dist/esm/prism";
import { nord } from "../../../../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

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
