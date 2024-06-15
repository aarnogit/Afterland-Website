import { memo } from "react";

const MFeaturesSection = () => {
  return (
    <div id="features" className="h-dvh flex flex-col justify-end gap-5 pb-5">
      <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-semibold max-w-3xl drop-shadow shadow-white">
        Built-In KYC and Privacy
      </h2>

      <h6 className="text-xs md:text-sm xl:text-xl font-medium max-w-xl leading-relaxed drop-shadow shadow-white">
        Employing PolygonID for secure and decentralized identity verification,
        Lumia ensures user privacy and data security. It offers optional
        full-scale KYC per wallet, enabling regulated institutions to
        participate in the RWA ecosystem confidently.
      </h6>
    </div>
  );
};

export default memo(MFeaturesSection);
