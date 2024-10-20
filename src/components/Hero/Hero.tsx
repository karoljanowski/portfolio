import HeroBalls from "./HeroBalls";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <HeroText />
            <HeroBalls />
        </div>
    );
}

export default Hero;