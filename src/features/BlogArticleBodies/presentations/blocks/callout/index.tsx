import { Emoji, FileObject, RichText } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";

type Props = {
  texts?: RichText[];
  icon?: FileObject | Emoji | null;
  color?: string;
};

export const CalloutPresentation: React.FC<Props> = ({ texts, icon, color }) => {
  if (!texts) return null;
  return (
    <div className="flex gap-30 bg-[#F5F5FC] p-40">
      {icon && (
        <div className="h-[24px] w-[24px]">
          {icon.type === "emoji" ? (
            (icon as Emoji).emoji
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={(icon as FileObject).url} alt="" />
          )}
        </div>
      )}
      <div className="inline whitespace-break-spaces">
        <Text richText={texts} />
      </div>
    </div>
  );
};
