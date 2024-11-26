import { useTransitionRouter } from "next-transition-router";
import { usePathname } from "next/navigation";

const useNavigation = () => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    const handleRedirect = (path: string) => {
        if (pathname === path) return;
        const isHashPath = path.includes('#');
        const isHomePage = pathname === '/' || pathname === '';
        
        if (isHashPath && isHomePage) {
            const id = path.split('#')[1];
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState({}, '', `/#${id}`);
        } else {
            router.push(path);
        }
    };

    return { handleRedirect };
};

export default useNavigation;