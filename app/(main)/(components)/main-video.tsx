"use client";

import { useEffect, useRef } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const frames = 966;

function MVideo({ fileName }: { fileName: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const handleFrame = useDebounceCallback((progress) => {
    console.log(progress);
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration * progress;
    }
  }, 5);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    handleFrame(latest);
  });

  useTransform(scrollYProgress, [0, 1], [0, frames]);

  useEffect(() => {
    const video = videoRef.current!;

    const handleLoadedMetadata = () => {
      if (scrollSectionRef.current) {
        const duration = video.duration;
        scrollSectionRef.current.style.height = `${
          Math.floor(duration) * frames
        }px`;
      }
    };

    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, []);

  return (
    <>
      <video
        muted
        ref={videoRef}
        className="h-dvh object-cover fixed inset-0 w-full -z-50"
        preload="metadata"
        aria-label="Video player"
      >
        <source src={fileName} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={scrollSectionRef} className="block" />
    </>
  );
}
export default MVideo;
