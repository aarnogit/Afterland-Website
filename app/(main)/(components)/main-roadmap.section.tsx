import MVideo from "./main-video";

const RoadmapItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col max-w-72">
    <span className="text-sm text-font-medium text-white/80">{title}</span>
    <p className="text-sm text-font-medium">{description}</p>
  </div>
);

const MRoadmapSection = () => {
  return (
    <section id="roadmap" className="pt-20 pb-10 flex flex-col gap-5 relative">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-semibold drop-shadow shadow-white`}
      >
        Roadmap
      </h2>
      <MVideo filepath="/gif/11.mp4" />
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
        <div className="col-span-1" />
        <div className="col-span-1 lg:col-span-2 flex justify-end items-center bg-black/60 w-max px-5  mx-auto rounded backdrop-blur-md">
          <RoadmapItem
            title="Q2 2025"
            description="AI Yield Management via zkML for optimized RWA opportunities"
          />
          <div className="flex flex-1" />
        </div>
        <div className="col-span-1 lg:col-span-3 flex justify-end items-center bg-black/60 rounded backdrop-blur-md">
          <div className="flex w-1/4" />
          <RoadmapItem
            title="Q4 2025"
            description="AI Yield Management via zkML for optimized RWA opportunities"
          />
          <div className="flex flex-1" />
        </div>
        <div className="flex justify-end items-center w-max mr-auto bg-black/60 rounded backdrop-blur-md">
          <div className="flex w-1/4" />
          <RoadmapItem
            title="Q2 2025"
            description="AI Yield Management via zkML for optimized RWA opportunities"
          />
          <div className="flex flex-1" />
        </div>
        <div className="col-span-2 flex justify-between items-center w-max ml-auto bg-black/60 rounded backdrop-blur-md">
          <div className="flex w-1/4" />
          <RoadmapItem
            title="Q2 2025"
            description="AI Yield Management via zkML for optimized RWA opportunities"
          />
        </div>
        <div className="col-span-3 flex w-max mx-auto bg-black/60 rounded backdrop-blur-md">
          <RoadmapItem
            title="Q2 2025"
            description="AI Yield Management via zkML for optimized RWA opportunities"
          />
        </div>
      </div>
    </section>
  );
};

export default MRoadmapSection;
