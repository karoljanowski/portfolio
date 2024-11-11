import Menu from "./Menu";
import Socials from "./Socials";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="absolute top-0 z-20 left-0 w-full">
            <div className='px-4 py-4 md:py-8 grid grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_2fr_1fr] items-center container mx-auto gap-2'>
                <Logo />
                <Menu />
                <Socials /> 
            </div>
        </div>
    )
}

export default Header