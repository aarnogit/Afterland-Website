"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useVBlockStore, useVideoStore } from "@/stores/video.store";
import Logo from "./logo";
import { Button } from "../ui/button";

const menu_data = [
  "home",
  "ABOUT",
  "FEATURES",
  "ROADMAP",
  "PARTNERS",
  "AIRDROP",
];

const Header = () => {
  return (
    <header className="bg-slate-950 lg:bg-transparent flex justify-between items-center h-20 sticky top-0 w-full z-20">
      <Logo />
      <div className="hidden lg:flex justify-between items-center w-max gap-5">
        {menu_data.map((item, index) => (
          <Button
            href={`#${item.toLocaleLowerCase()}`}
            variant={menu_data.length === index + 1 ? "glass" : "ghost"}
            className={`font-semibold uppercase text-xs sm:text-sm ${
              menu_data.length === index + 1
                ? "border border-blue-800/35 shadow shadow-blue-950"
                : "text-slate-200 hover:text-white/95 hover:bg-black/40 backdrop-blur-md duration-500 transition-colors"
            }`}
            // style={{
            //   boxShadow:
            //     menu_data.length === index + 1
            //       ? "0px 0px 7.7px 1px #8a94f257, 0px 0px 8px 0px #7588e9cc inset"
            //       : "",
            // }}
            key={`header-navigation--${item}`}
          >
            {item}
          </Button>
        ))}
      </div>

      {/* <MobileBurger
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          handleNavigate={handleNavigate}
        /> */}
    </header>
  );
};

export default Header;
