"use client";

import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import BoxReveal from "@/components/custom/box-reveal";
import { TypingAnimation } from "@/components/custom/typing";
import { Button } from "@/components/ui/button";
import { header_menu_data } from "@/lib/constants";
import { useAboutSectionStore } from "@/stores/general.store";
import { PlusIcon } from "lucide-react";
import { Fragment, useLayoutEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";

const Preloader = ({ className }: { className: string }) => (
  <div
    className={`${className} flex min-h-dvh w-screen fixed left-0 top-0 right-0 bottom-0 z-[500] bg-black justify-center items-center transition-all duration-1000`}
  >
    <div className={`flex flex-1 items-center justify-center`}>
      <div id="loader">
        <div id="title" className="flex items-center gap-4">
          {/* <WordPullUp className="text-lg" words="LOADING" /> */}

          <BoxReveal boxColor={"#0000ff"} duration={0.5}>
            <p className="text-lg">LOADING</p>
          </BoxReveal>
          <p className="loading-number">%</p>
        </div>
        <div id="loading-bar-border">
          <div className="loading-bar"></div>
        </div>
        <div id="warning">
          <div className="flex items-center gap-2">
            <span className="exclamation">!</span>
            <BoxReveal boxColor={"#0000ff"} duration={0.5}>
              <span className="text-xs">CAUTION, Do not turn off.</span>
            </BoxReveal>
          </div>
          <div id="line-cascates"></div>
        </div>
      </div>
    </div>
  </div>
);

function MainBody() {
  const { active, toggle } = useAboutSectionStore();
  const { push } = useRouter();
  const [loaded, setLoaded] = useState<boolean>(false);

  const handlePreloader = useDebounceCallback(() => {
    setLoaded(true);
  }, 5000);
  const handleToggle = useDebounceCallback(toggle, 15000);

  useLayoutEffect(handlePreloader, []);

  const tabs = [
    {
      type: "about",
      text: "Welcome to Afterland, an immersive play-to-earn experience set in a post-apocalyptic cyberpunk world.",
    },
    {
      type: "about",
      text: "Developed within the Telegram Web App on the TON blockchain.",
    },
    {
      type: "about",
      text: "Afterland offers a unique fusion of farming simulation and sci-fi adventure.",
    },
    {
      type: "default",
      text: "SESSION NUMBER 9225654",
    },
    {
      type: "default",
      text: "NEW USER WELCOME",
    },
    {
      type: "default",
      text: "WRITE YOUR NICKNAME",
    },
    {
      type: "default",
      text: (
        <TypingAnimation
          text="// BIG FAT CYBER PUNK COW"
          className="text-xs xl:text-lg 2xl:text-xl font-medium text-white text-left"
        />
      ),
    },
    {
      type: "default",
      text: "LET’s START THIS COMPETITION",
    },
  ];

  return (
    <>
      <Preloader
        className={loaded ? "opacity-0 pointer-events-none" : "opacity-100"}
      />
      <div className="w-full max-w-full md:max-w-72 lg:max-w-xs xl:max-w-sm 2xl:max-w-xl ml-auto flex flex-col justify-between items-end relative z-50 h-full flex-1 px-0 md:px-2.5 pt-5 xl:px-5 gap-5 2xl:gap-10">
        <div
          className="flex flex-col gap-5 xl:gap-7 2xl:gap-10 border-x border-[#A6D4D5] w-full px-5 lg:px-7 2xl:px-10 py-5 xl:py-6 2xl:py-10 backdrop-blur-lg relative information-card"
          style={{
            background:
              "linear-gradient(90deg, rgba(21, 250, 248, 0.15) 0%, rgba(21, 250, 248, 0) 100%)",
          }}
        >
          <div className="side left w-3.5 h-40 lg:h-48 xl:h-72 2xl:h-80 absolute left-0 top-1/2 -translate-y-1/2" />
          <div className="side right w-3 h-40 lg:h-48 xl:h-72 2xl:h-80 absolute right-0 top-1/2 -translate-y-1/2" />

          <h2 className="cyberpunk glitched font-bold pb-5 lg:pb-6 2xl:pb-8 text-sm lg:text-base xl:text-2xl 2xl:text-4xl">
            {"// running afterland soft 0898.4356.6432.3432"}
          </h2>

          <div className="flex relative w-full">
            <ul className="space-y-3.5">
              {tabs.map((item) => (
                <>
                  {item.type === "about" && active ? (
                    <li className="text-xs xl:text-lg 2xl:text-xl font-medium text-[#8E8E8E]">
                      {item.text}
                    </li>
                  ) : null}
                  {item.type === "default" && active === false ? (
                    <li className="text-xs xl:text-lg 2xl:text-xl font-medium text-[#8E8E8E]">
                      {item.text}
                    </li>
                  ) : null}
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-2 2xl:gap-4 w-full">
          <Button
            variant="pluses"
            size="sm"
            className="pointer-events-none relative"
          >
            <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -left-1" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -top-1 -right-1" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -left-1" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-1 -right-1" />
            <span>:social links:</span>
          </Button>
          <div className="flex flex-nowrap items-center gap-4 mt-5">
            <Button
              size="sm"
              className="rounded-none w-full h-max lg:h-12 xl:h-14 2xl:h-16 justify-center items-center gap-2 2xl:gap-4 text-left"
              href="https://t.me/afterlandTON"
            >
              <FaTelegramPlane size={16} />
              <span>
                <span aria-hidden className="button-primary-glitch">
                  :Telegram_:
                </span>
                Telegram
              </span>
            </Button>
            <Button
              size="sm"
              className="rounded-none w-full h-max lg:h-12 xl:h-14 2xl:h-16 justify-center items-center gap-2 2xl:gap-4 text-left"
              href="https://x.com/afterlandton"
            >
              <RiTwitterXFill size={16} />
              <span aria-hidden className="button-primary-glitch">
                x (TWITTER)
              </span>
              x (TWITTER)
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-5 w-full justify-between items-center flex-nowrap">
            {header_menu_data.map((item) => (
              <Fragment key={`header-navigation--${item}`}>
                {item.toLocaleLowerCase() === "about" ? (
                  <Button
                    variant="pluses"
                    size="sm"
                    className="relative flex lg:hidden w-full"
                    onClick={() => {
                      toggle();
                      handleToggle();
                    }}
                  >
                    <PlusIcon className="w-3 h-3 text-white/30 absolute top-1 left-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute top-1 right-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-1 left-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-1 right-1" />
                    <span>:{item.toLocaleLowerCase()}:</span>
                  </Button>
                ) : (
                  <Button
                    variant="pluses"
                    size="sm"
                    className="relative flex lg:hidden w-full"
                    href="https://t.me/lavandadva"
                  >
                    <PlusIcon className="w-3 h-3 text-white/30 absolute top-1 left-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute top-1 right-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-1 left-1" />
                    <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-1 right-1" />
                    <span>:{item.toLocaleLowerCase()}:</span>
                  </Button>
                )}
              </Fragment>
            ))}
          </div>

          <Button
            size="sm"
            className="flex md:hidden rounded-none justify-start text-left relative z-20 w-full h-12 px-10"
            href="https://t.me/Afterland_Bot"
          >
            <PlusIcon className="w-3 h-3 text-white/30 absolute top-2 left-3" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute top-3 right-2.5" />
            <PlusIcon className="w-3 h-3 text-white/30 absolute bottom-2 right-2.5" />
            <span aria-hidden className="button-primary-glitch">
              :PLAY_:
            </span>
            PLAY
          </Button>
        </div>
      </div>
    </>
  );
}

export default MainBody;
