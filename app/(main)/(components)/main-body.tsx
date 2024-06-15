"use client";

import { useRef } from "react";
import { useDebounceCallback } from "usehooks-ts";

import { scroll } from "framer-motion";
import MAboutSection from "./main-about.section";
import MainFeaturesSection from "./main-features.section";
import MHomeSection from "./main-home.section";

function VideoComponent({ fileName }: { fileName: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFrame = useDebounceCallback((progress) => {
    if (videoRef.current && videoRef.current.readyState) {
      videoRef.current.currentTime = videoRef.current.duration * progress;
    }
  }, 5);

  scroll((progress) => handleFrame(progress));

  return (
    <video
      muted
      ref={videoRef}
      className="h-dvh object-cover fixed inset-0 w-full -z-50"
      preload="preload"
      aria-label="Video player"
    >
      <source src={fileName} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function MainBody() {
  return (
    <div className="flex flex-col gap-40 h-[2200dvh] relative">
      <VideoComponent fileName="/lumia.mp4" />
      <MHomeSection />
      <MAboutSection />
      <MainFeaturesSection />
    </div>
  );
}

export default MainBody;
