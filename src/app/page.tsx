import AboutSection from "@components/homepage/AboutSection/AboutSection";
import EventSection from "@components/homepage/EventSection/EventSection";
import HeroSection from "@components/homepage/HeroSection/HeroSection";
import IndusCollabSection from "@components/homepage/IndCollabSection/IndusCollabSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <IndusCollabSection />
      <EventSection />
    </main>
  );
}
