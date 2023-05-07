import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const NAV_LIST = [
  { text: "Home", href: "/" },
  { text: "Programming", href: "/programming" },
  { text: "Covid-19", href: "/covid" },
];

export const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeId, setActiveId] = useState(-1);

  return (
    <nav
      className={`sticky flex p-2 justify-between items-center top-0 z-30 ${poppins.className}`}
    >
      <Link href={"/"}>
        <h1 className="text-inherit">Logo</h1>
      </Link>
      <div
        onClick={() => setNavActive(!navActive)}
        className="flex flex-col gap-[6px] cursor-pointer"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${navActive ? "active" : ""} navMenu-list`}>
        {NAV_LIST.map((menu, id) => (
          <div
            onClick={() => {
              setActiveId(id);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeId === id} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
};
