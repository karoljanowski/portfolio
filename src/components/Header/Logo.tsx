import { useTransitionRouter } from "next-transition-router"
import { usePathname } from "next/navigation"
import Image from "next/image"
const Logo = ({ loadingScreen }: { loadingScreen?: boolean }) => {
    const pathname = usePathname()
    const router = useTransitionRouter()
    const handleRedirect = () => {
        if (loadingScreen) return
        if (pathname === '/'){
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            router.push('/')
        }
    }
    return (
        <div onClick={handleRedirect} className={`w-8 h-8 bg-cyan-800 bg-opacity-50 backdrop-blur rounded-md relative ${loadingScreen ? 'scale-[3]' : 'cursor-pointer'}`}>
            <Image src="/cursor.svg" alt="logo" width={32} height={32} className="w-full h-full p-2" />
            <Image src="/cursor.svg" alt="logo" width={32} height={32} className="w-full h-full absolute top-[-2px] left-[3px] p-2 opacity-75" />
        </div>
    )
}

export default Logo