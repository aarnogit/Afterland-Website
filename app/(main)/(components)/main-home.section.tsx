"use client";

import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { memo, useMemo, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";

const texts = [
  "Connected",
  "Intelligent",
  "Private",
  "Capital efficient",
  "Liquid",
];

const MHomeSection = () => {
  const typingREF = useRef(null);
  //   const isVisible = useInView(typingREF);

  //   console.log(isVisible);
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
    <div id="home" className="h-dvh flex flex-col justify-center gap-5">
      <h1 className="text-8xl font-semibold max-w-3xl drop-shadow shadow-white">
        Reinventing DeFI for RWAs
      </h1>

      <h6
        ref={typingREF}
        className="text-xl font-medium max-w-sm drop-shadow shadow-white"
      >
        The first ever {text ?? ""} <br />
        restake roll up L2 for RWAs
      </h6>

      <Button
        variant="glass"
        className={`w-max font-semibold uppercase text-xs sm:text-sm border border-blue-800/35 shadow shadow-blue-950`}
      >
        AIRDROP
      </Button>
    </div>
  );
};

export default memo(MHomeSection);
