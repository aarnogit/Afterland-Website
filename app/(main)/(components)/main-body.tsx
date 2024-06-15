"use client";

import { useIsMounted } from "usehooks-ts";
import MAboutSection from "./main-about.section";
import MHomeSection from "./main-home.section";
import MVideo from "./main-video";
import { Suspense } from "react";

function MainBody() {
  return (
    <div className="flex flex-col h-[2200dvh] relative">
      <Suspense fallback="loading..">
        <MVideo fileName="/lumia.mp4" />
      </Suspense>
      <MHomeSection />
      <MAboutSection />
    </div>
  );
}

export default MainBody;
