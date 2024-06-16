import { memo } from "react";
import MSection from "./main-section";
import MVideo from "./main-video";

const MSFeaturesSection = () => {
  return (
    <section className="h-dvh w-full flex flex-col md:flex-row relative">
      <MSection
        title="Pioneering scalability, decentralization, and fast finality"
        description='Through its innovative Data Availability Committee (DAC), Lumia harnesses the power of zkEVM technology to future-proof the network and capture economic value for LUMIA token holders and network participants, accelerating the transition from "stage 0" to "stage 2" roll-up.'
      />
      <MVideo filepath="/gif/4.mp4" />
    </section>
  );
};

export default memo(MSFeaturesSection);
