import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { Emoji, FileObject, RichText } from "@/types/block";

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
            <img src={(icon as FileObject).url} alt="" />
          )}
        </div>
      )}
      <div className="inline whitespace-break-spaces">
        <Text text={texts} />
      </div>
    </div>
  );
};
