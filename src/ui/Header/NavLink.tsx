import Link from "next/link";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/activities", label: "活動内容" },
  { href: "/members", label: "メンバー" },
  { href: "/products", label: "プロダクト" },
  { href: "/blog", label: "ブログ" },
  { href: "/achievements", label: "活動実績" },
  { href: "/faq", label: "FAQ" },
];

type NavLinksProps = {
  onClick: () => void;
  className: string;
};

export const NavLinks = (props: NavLinksProps) => {
  const { onClick, className } = props;
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} onClick={onClick} className={className}>
          {item.label}
        </Link>
      ))}
    </>
  );
};
