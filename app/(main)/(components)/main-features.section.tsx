import { memo } from "react";
import MSection from "./main-section";
import MVideo from "./main-video";

const MFeaturesSection = () => {
  return (
    <section
      id="features"
      className="h-dvh w-full flex justify-end md:justify-start flex-col md:flex-row relative pb-14 md:p-0"
    >
      <MSection
        className="-order-10 sm:order-none pt-40 md:pt-0"
        subtitle="features"
        title="Built-In KYC and Privacy"
        description="Employing PolygonID for secure and decentralized identity verification, Lumia ensures user privacy and data security. It offers optional full-scale KYC per wallet, enabling regulated institutions to participate in the RWA ecosystem confidently."
      />
      <MVideo filepath="/gif/3.mp4" videoClassName="!left-0" />
    </section>
  );
};

export default memo(MFeaturesSection);
