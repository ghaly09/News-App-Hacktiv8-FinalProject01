import Link from "next/link";

export const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={` ${active ? "active" : ""} nav-link`}>
      {text}
    </Link>
  );
};
