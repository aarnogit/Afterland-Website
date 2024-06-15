import { memo } from "react";

const MAboutSection = () => {
  return (
    <div id="about" className="h-dvh flex flex-col justify-end gap-5 pb-5">
      <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-semibold max-w-3xl drop-shadow shadow-white">
        The new home of RWAs
      </h2>

      <h6 className="text-xs md:text-sm xl:text-xl font-medium max-w-xl leading-relaxed drop-shadow shadow-white">
        Lumia simplifies the building process and creates asymmetric advantages
        for projects thanks to boundless liquidity, unique cross-chain yield
        opportunities and unmatched interoperability.
      </h6>
    </div>
  );
};

export default memo(MAboutSection);
