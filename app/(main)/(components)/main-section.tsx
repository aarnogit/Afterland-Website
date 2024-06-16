"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { useMediaQuery } from "usehooks-ts";

type Props = {
  className?: string;
  subtitle?: string;
  title: React.ReactNode;
  titleClassName?: string;
  description: React.ReactNode;
  descriptionClassName?: string;
  button?: React.ReactNode;
};

const MSection = ({
  className = "",
  subtitle,
  title,
  titleClassName = "text-xl sm:text-2xl md:text-4xl",
  description,
  descriptionClassName = "text-xs md:text-sm",
  button,
}: Props) => {
  const isMobile = useMediaQuery("(max-width: 780px)");

  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
  });
  return (
    <motion.div
      ref={ref}
      initial={isMobile ? undefined : { opacity: 0, x: -200, scale: 0 }}
      animate={
        isMobile
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -200,
              scale: inView ? 1 : 0,
            }
      }
      transition={{ duration: 0.7 }}
      className={`flex flex-col justify-center gap-5 max-w-lg ${className}`}
    >
      {subtitle ? (
        <div className="flex flex-nowrap gap-1.5 items-center text-white/50">
          <div className="w-5 h-[1px] bg-white/50" />
          <span className="text-xs uppercase font-medium">{subtitle}</span>
        </div>
      ) : null}
      <h2
        className={`${titleClassName} font-semibold drop-shadow shadow-white`}
      >
        {title}
      </h2>
      <h6
        className={`${descriptionClassName} font-medium drop-shadow shadow-white`}
      >
        {description}
      </h6>

      {button}
    </motion.div>
  );
};

export default MSection;
