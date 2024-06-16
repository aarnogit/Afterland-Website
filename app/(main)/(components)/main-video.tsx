"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

const MVideo = ({
  filepath,
  className = "",
  videoClassName = "",
}: {
  filepath: string;
  className?: string;
  videoClassName?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery("(max-width:720px)");

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.currentTime = 0;
      }
    }
  }, [inView]);

  const initial = { opacity: 0, scale: isMobile ? 1 : 0 };
  const animate = {
    opacity: inView ? 1 : 0,
    scale: isMobile ? 1 : inView ? 1 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7 }}
      className={`${className} -order-5 md:order-none w-full md:max-w-4xl h-[50dvh] md:h-full flex justify-center items-center relative video-container -z-50`}
    >
      <video
        ref={videoRef}
        className={`w-[700px] md:w-full max-w-[700px] md:max-w-3xl absolute right-0 top-1/2 -translate-y-1/2 -z-50 ${videoClassName}`}
        preload="metadata"
        muted
        playsInline
        loop
        autoPlay
      >
        <source src={filepath} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default MVideo;
