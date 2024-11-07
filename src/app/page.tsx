import HeroComponent from "@/components/HeroComponent";
import AboutComponent from "@/components/AboutComponent";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {

  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
