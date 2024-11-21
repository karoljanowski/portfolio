import { useTransitionRouter } from "next-transition-router"

const Logo = ({ loadingScreen }: { loadingScreen?: boolean }) => {
    const router = useTransitionRouter()
    const handleRedirect = () => {
        if (loadingScreen) return
        router.push('/')
    }
    return (
        <div onClick={handleRedirect} className={`w-8 h-8 bg-cyan-800 bg-opacity-50 backdrop-blur rounded-md relative ${loadingScreen ? 'scale-[3]' : 'cursor-pointer'}`}>
            <img src="/cursor.svg" alt="logo" className="w-full h-full p-2" />
            <img src="/cursor.svg" alt="logo" className="w-full h-full absolute top-[-2px] left-[3px] p-2 opacity-75" />
        </div>
    )
}

export default Logo