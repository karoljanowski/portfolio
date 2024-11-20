
import HeroComponent from "@/components/Hero/HeroComponent";
import Link from "next/link";
import AboutComponent from "@/components/About/AboutComponent";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {

  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <ContactSection />
    </>
  );
}
