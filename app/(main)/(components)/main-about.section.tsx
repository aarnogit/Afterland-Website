"use client";

import { memo } from "react";
import MSection from "./main-section";
import MVideo from "./main-video";

const MAboutSection = () => {
  return (
    <section
      id="about"
      className="h-dvh w-full flex flex-col md:flex-row relative"
    >
      <MSection
        className="-order-10 sm:order-none pt-40 md:pt-0"
        title="The new home of RWAs"
        description="Lumia simplifies the building process and creates asymmetric advantages for projects thanks to boundless liquidity, unique cross-chain yield opportunities and unmatched interoperability."
      />
      <MVideo filepath="/gif/2.mp4" videoClassName="!left-0" />
    </section>
  );
};

export default memo(MAboutSection);
