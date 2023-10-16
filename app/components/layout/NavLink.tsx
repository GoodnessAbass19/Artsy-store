"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment}`;

  return (
    <Link
      className={`${active ? "border-b-2 border-black" : "border-none"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
