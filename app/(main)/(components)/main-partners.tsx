import Image from "next/image";
import MVideo from "./main-video";

const PartnerItem = ({
  image,
  title,
  link,
}: {
  image?: string;
  title?: string;
  link: string;
}) => (
  <div className="flex px-3.5 py-5 rounded shadow shadow-blue-950 h-max bg-black/60 backdrop-blur-md">
    {image ? (
      <Image src={image} alt="partner-image" />
    ) : (
      <p className="text-xs md:text-xl text-white font-medium">{title}</p>
    )}
  </div>
);

const MPartners = () => {
  return (
    <section
      id="partners"
      className="pt-20 flex flex-col justify-center gap-5 relative"
    >
      <div className="flex flex-col justify-center items-center gap-10 py-5 max-w-md mx-auto">
        <h2
          className={`text-xl sm:text-2xl md:text-4xl font-semibold drop-shadow shadow-white`}
        >
          Partners
        </h2>
        <p className="text-xs md:text-sm font-medium drop-shadow shadow-white text-center">
          Our esteemed network of partners, each a testament to their trust in
          Lumia&apos;s vision for innovation and success in DeFi
        </p>
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-7 h-max">
        {[...new Array(16)].map((partner, id) => (
          <PartnerItem link="" title="coinbase" key={id} />
        ))}
      </div>
      <MVideo filepath="/gif/9.mp4" />
    </section>
  );
};

export default MPartners;
