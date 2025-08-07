
import AboutBrief from "@/components/HomePage/AboutBrief";
import Features from "@/components/HomePage/Features";
import HeroSlider from "@/components/HomePage/HeroSlider";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import VideoSection from "@/components/HomePage/VideoSection";




export default async function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <HeroSlider />
      <AboutBrief />
      <Features />
      <Services />
      <VideoSection />
      <Testimonials />
      {/* <Newsletter /> */}
    </div>
  );
}
