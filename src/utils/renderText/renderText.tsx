import { InlineMath } from "react-katex";
import { RichText } from "@/types/block";
import styles from "./text.module.css";
import "katex/dist/katex.min.css";

export const Text = ({ richText }: { richText: RichText[] }) => {
  return richText.map((value: RichText) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      equation,
      text,
    } = value;
    if (equation) return <InlineMath math={equation.expression} />;

    if (!text) return null;
    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? (
          <a href={text.link.url} className="text-link hover:underline break-all">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};
