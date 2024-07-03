"use client";

import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function MainBody() {
  return (
    <div className="flex flex-col justify-between relative z-50 h-full flex-1 p-10 gap-10">
      <div
        className="flex flex-col gap-10 border-x border-[#A6D4D5] w-full max-w-xl px-10 py-12"
        style={{
          background:
            "linear-gradient(90deg, rgba(21, 250, 248, 0.15) 0%, rgba(21, 250, 248, 0) 100%)",
        }}
      >
        <p className="text-3xl font-bold uppercase">
          {"// running afterland soft 0898.4356.6432.3432"}
        </p>

        <ul className="flex flex-col gap-5">
          <li className="text-sm font-medium text-[#8E8E8E]">
            SESSION NUMBER 9225654
          </li>
          <li className="text-sm font-medium text-[#8E8E8E]">
            NEW USER WELCOME
          </li>
          <li className="text-sm font-medium text-[#8E8E8E]">
            WRITE YOUR NICKNAME
          </li>
          <li className="text-sm font-medium text-white">
            {"// BIG FAT CYBER PUNK COW"}
          </li>
          <li className="text-sm font-medium text-[#8E8E8E]">
            LET’s START THIS COMPETITION
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-max">
        <Button
          variant="pluses"
          size="sm"
          className="pointer-events-none relative text-xl"
        >
          <PlusIcon className="w-3 h-3 text-white/30 absolute -top-3 -left-3" />
          <PlusIcon className="w-3 h-3 text-white/30 absolute -top-3 -right-3" />
          <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-3 -left-3" />
          <PlusIcon className="w-3 h-3 text-white/30 absolute -bottom-3 -right-3" />
          <span>:social links:</span>
        </Button>
        <div className="flex flex-wrap items-center gap-4 mt-5">
          <Button
            size="sm"
            className="rounded-none w-48 h-10 text-xl justify-start items-center gap-4 px-10 text-left"
            onClick={(e) => console.log("click!")}
          >
            <FaTelegramPlane />
            <span>
              <span aria-hidden className="button-primary-glitch">
                :Telegram_:
              </span>
              Telegram
            </span>
          </Button>
          <Button
            size="sm"
            className="rounded-none w-48 h-10 text-xl justify-start items-center gap-4 px-10 text-left"
            onClick={(e) => console.log("click!")}
          >
            <RiTwitterXFill />
            <span aria-hidden className="button-primary-glitch">
              x (TWITTER)
            </span>
            x (TWITTER)
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
