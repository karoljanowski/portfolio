import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header";
const page = () => {
  return (
    <div className="bg-[#E2E2E2]">
      <Header />
      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  );
}

export default page;