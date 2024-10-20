import Link from "next/link";
import { Box, BoxSelect } from "lucide-react";
import Button from "./Partials/Button";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 fixed top-0 w-full left-0 right-0 container mx-auto z-50">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Box />
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                </div>
            </div>
            <div className="flex items-center">
                <Link href="/contact">
                    Hire me
                </Link>
            </div>
        </div>
    );
}

export default Header;