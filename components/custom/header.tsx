"use client";
import { header_menu_data } from "@/lib/constants";
import { useAboutSectionStore } from "@/stores/general.store";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useDebounceCallback } from "usehooks-ts";
import { Button } from "../ui/button";
import Logo from "./logo";
import { Fragment } from "react";

const Header = () => {
  const { toggle } = useAboutSectionStore();
  const { push } = useRouter();

  const handleToggle = useDebounceCallback(toggle, 15000);

  return (
    <header className="relative z-50 flex justify-between items-center w-full min-h-max header md:py-5 xl:py-10 backdrop-blur-xl">
      <div className="flex justify-between items-center lg:pl-14 relative w-full">
        <Logo />
        <div className="relative flex justify-between items-center w-max md:gap-5 xl:gap-10 pr-0 md:pr-5 lg:pr-10">
          {header_menu_data.map((item) => (
            <Fragment key={`header-navigation--${item}`}>
              {item.toLocaleLowerCase() === "about" ? (
                <Button
                  variant="pluses"
                  size="sm"
                  className="relative hidden lg:flex"
                  key={`header-navigation--${item}`}
                  onClick={() => {
                    toggle();
                    handleToggle();
                  }}
                >
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -left-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -right-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -left-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -right-1" />
                  <span>:{item.toLocaleLowerCase()}:</span>
                </Button>
              ) : (
                <Button
                  variant="pluses"
                  size="sm"
                  className="relative hidden lg:flex"
                  key={`header-navigation--${item}`}
                  href="https://t.me/lavandadva"
                >
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -left-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -right-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -left-1" />
                  <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -right-1" />
                  <span>:{item.toLocaleLowerCase()}:</span>
                </Button>
              )}
            </Fragment>
          ))}
          <div className="flex lg:hidden flex-nowrap items-center gap-4">
            <Button
              size="sm"
              variant="invisible"
              href="https://t.me/afterlandTON"
              onClick={() => push("https://t.me/afterlandTON")}
            >
              <FaTelegramPlane size={16} />
            </Button>
            <Button
              size="sm"
              variant="invisible"
              href="https://x.com/afterlandton"
            >
              <RiTwitterXFill size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size="sm"
        className="hidden md:flex rounded-none justify-start text-left relative z-20 w-max min-w-40 lg:min-w-52 px-10"
        href="https://t.me/Afterland_Bot"
      >
        <PlusIcon className="w-3 h-3 text-white/30 absolute top-2 left-3" />
        <PlusIcon className="w-3 h-3 text-white/30 absolute top-2 right-2.5" />
        <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-1.5 right-2.5" />
        <span aria-hidden className="button-primary-glitch">
          :PLAY_:
        </span>
        PLAY
      </Button>
    </header>
  );
};

export default Header;
