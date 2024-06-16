"use client";
import { Button } from "../ui/button";
import BMenu from "./burger-menu";
import Logo from "./logo";

const menu_data = [
  "HOME",
  "ABOUT",
  "FEATURES",
  "ROADMAP",
  "PARTNERS",
  "AIRDROP",
];

const Header = () => {
  return (
    <header className="bg-black/60 backdrop-blur-md flex justify-between items-center h-20 fixed top-0 left-1/2 -translate-x-1/2 container w-full z-20">
      <Logo />
      <div className="hidden md:flex justify-between items-center w-max md:gap-2.5 xl:gap-5">
        {menu_data.map((item, index) => (
          <Button
            href={`#${item.toLocaleLowerCase()}`}
            size="sm"
            variant={menu_data.length === index + 1 ? "glass" : "ghost"}
            className={`font-semibold uppercase text-xs sm:text-sm ${
              menu_data.length === index + 1
                ? "border border-blue-800/35 shadow shadow-blue-950"
                : "text-slate-200 hover:text-white/95 hover:bg-black/40 backdrop-blur-md duration-500 transition-colors"
            }`}
            key={`header-navigation--${item}`}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="flex md:hidden">
        <BMenu />
      </div>
    </header>
  );
};

export default Header;
