"use client";
import { useState } from "react";
import CartIcon from "../ui/custom-icons/CartIcon";
import { SearchIcon } from "../ui/custom-icons";
import ChatIcon from "../ui/custom-icons/ChatIcon";
import Link from "next/link";
import NotificationIcon from "../ui/custom-icons/NotificationIcon";
import CloseIcon from "../ui/custom-icons/CloseIcon";
import MenuIcon from "../ui/custom-icons/MenuIcon";
import { useSelectedLayoutSegment } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Marketplace", link: "/marketplace" },
    { name: "Auctions", link: "/auctions" },
    { name: "Drops", link: "/drop" },
  ];

  return (
    <header>
      <nav className="max-w-7xl mx-auto left-0 top-0 overflow-hidden lg:py-10  p-5">
        {/* desktop menu */}
        <div className="flex justify-between mx-auto">
          <div
            onClick={() => setOpen(!open)}
            className={`md:text-4xl text-2xl font-semibold items-center lg:hidden ${
              open ? "text-black" : "text-black"
            }`}
          >
            <MenuIcon className=" w-7 h-7" />
          </div>
          <div>
            <Link
              href={"/"}
              className={`lg:text-4xl text-2xl font-semibold font-serif`}
              style={{ fontFamily: "Playfair Display SC" }}
            >
              ARTSY.
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex justify-between items-center gap-10 font-normal not-italic text-2xl">
              <li>
                <Link
                  href={"/"}
                  className={`${
                    !segment ? "border-b-2 border-black" : "border-none"
                  }`}
                >
                  Home
                </Link>
              </li>
              {menuLinks.map((links, i) => (
                <li key={i}>
                  <NavLink href={links.link}>{links.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* mobile navbar */}
          <div
            className={`absolute h-screen duration-300 z-[999] w-full px-7 py-5 bg-white text-black ${
              open ? "left-0 top-0" : "left-[-100%]"
            }`}
          >
            <div className="flex justify-between items-center">
              <Link
                href={"/"}
                onClick={() => setOpen(!open)}
                className={`text-2xl font-semibold font-serif`}
                style={{ fontFamily: "Playfair Display SC" }}
              >
                ARTSY.
              </Link>
              <CloseIcon
                className="w-7 h-7 font-bold"
                onClick={() => setOpen(!open)}
              />
            </div>
            <ul className="justify-start flex flex-col h-full gap-10 text-left py-20 text-2xl">
              <li onClick={() => setOpen(!open)}>
                <Link href={"/"}>Home</Link>{" "}
              </li>
              {menuLinks.map((links, i) => (
                <li key={i} onClick={() => setOpen(!open)}>
                  <Link href={links.link} className="">
                    {links.name}
                  </Link>{" "}
                </li>
              ))}
              <div
                className={`absolute bottom-5 right-4 z-[999] cursor-pointer text-white text-4xl bg-[#3341C1] shadow-md shadow-black w-16 h-16 flex items-center justify-center rounded-full sm:right-8 animate-bounce ${
                  open ? "block" : "hidden"
                } `}
              >
                <Link href={"/"}>
                  <ChatIcon className="md:w-7 md:h-7 w-5 h-5" />
                </Link>{" "}
              </div>
            </ul>
          </div>

          <div
            className={`text-2xl lg:text-3xl font-semibold gap-2 flex ${
              open ? "hidden" : "block"
            }`}
          >
            <CartIcon className="md:w-7 md:h-7 w-5 h-5" />
            <SearchIcon className="md:w-7 md:h-7 w-5 h-5" />
            <NotificationIcon className="md:w-7 md:h-7 w-5 h-5 hidden md:block" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
