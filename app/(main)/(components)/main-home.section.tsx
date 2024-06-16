"use client";

import { Button } from "@/components/ui/button";
import { memo, useMemo } from "react";
import ReactTypingEffect from "react-typing-effect";
import MSection from "./main-section";
import MVideo from "./main-video";

const texts = [
  "Connected",
  "Intelligent",
  "Private",
  "Capital efficient",
  "Liquid",
];

const MHomeSection = () => {
  const text = useMemo(
    () => (
      <ReactTypingEffect
        text={texts}
        className="drop-shadow-md shadow-[#2c41ff] text-white"
        speed={300}
      />
    ),
    []
  );
  return (
    <section
      id="home"
      className="h-dvh w-full flex justify-end md:justify-start flex-col md:flex-row relative pb-14 md:p-0"
    >
      <MSection
        title={<>Reinventing DeFI for RWAs</>}
        titleClassName="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl"
        descriptionClassName="text-xs md:text-sm xl:text-xl"
        description={
          <>
            The first ever {text ?? ""} <br />
            restake roll up L2 for RWAs
          </>
        }
        button={
          <Button
            variant="glass"
            className={`w-max font-semibold uppercase text-xs sm:text-sm border border-blue-800/35 shadow shadow-blue-950`}
          >
            AIRDROP
          </Button>
        }
      />
      <MVideo filepath="/gif/1.mp4" />
    </section>
  );
};

export default memo(MHomeSection);
