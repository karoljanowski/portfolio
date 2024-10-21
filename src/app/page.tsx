import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header";
import GridSection from "@/components/GridSection/GridSection";
const page = () => {
  return (
    <div className="bg-[#E2E2E2]">
      <Header />
      <div className="container mx-auto px-4">
        <Hero />
        <GridSection />
      </div>
    </div>
  );
}

export default page;