import MAboutSection from "./main-about.section";
import MFeaturesSection from "./main-features.section";
import MSFeaturesSection from "./main-subfeatures.section";
import MHomeSection from "./main-home.section";
import MRoadmapSection from "./main-roadmap.section";
import MPartners from "./main-partners";
import Footer from "@/components/custom/footer";

function MainBody() {
  return (
    <div className="flex flex-col relative">
      <MHomeSection />
      <MAboutSection />
      <MFeaturesSection />
      <MSFeaturesSection />
      <MRoadmapSection />
      <MPartners />
      <Footer />
    </div>
  );
}

export default MainBody;
