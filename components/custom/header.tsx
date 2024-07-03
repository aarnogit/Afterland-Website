"use client";
import { header_menu_data } from "@/lib/constants";
import { Button } from "../ui/button";
import BMenu from "./burger-menu";
import Logo from "./logo";
import { PlusIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-nowrap justify-between items-center w-full py-3.5 px-5 border-t-2 border-l-2 border-[#576E6F] relative">
      <div className="pl-14 relative">
        <Logo />
      </div>
      <div className="relative hidden md:flex justify-between items-center w-max md:gap-5 xl:gap-10 pr-10">
        {header_menu_data.map((item) => (
          <Button
            variant="pluses"
            size="sm"
            className="relative text-xl "
            key={`header-navigation--${item}`}
          >
            <PlusIcon className="w-3 h-3 text-white/30 absolute -top-3 -left-3" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -top-3 -right-3" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-3 -left-3" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-3 -right-3" />
            <span>:{item.toLocaleLowerCase()}:</span>
          </Button>
        ))}
        <Button
          size="sm"
          className="rounded-none w-48 h-10 text-xl justify-start px-10 text-left"
          onClick={(e) => console.log("click!")}
        >
          <span aria-hidden className="button-primary-glitch">
            :PLAY_:
          </span>
          PLAY
        </Button>
      </div>

      <div className="flex md:hidden">
        <BMenu />
      </div>
    </header>
  );
};

export default Header;
