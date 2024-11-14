import HeroComponent from "@/components/Hero/HeroComponent";
import AboutComponent from "@/components/About/AboutComponent";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {

  return (
    <>
      <HeroComponent />
      <AboutComponent />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </>
  );
}
