type Props = {
  href?: string;
};

export const BookmarkPresentation: React.FC<Props> = ({ href }) => {
  if (!href) return null;
  return (
    <a href={href} target="_brank" className="text-link hover:underline break-words">
      {href}
    </a>
  );
};
