import Link from "next/link";

const Menu = () => {
    return (
        <div className='absolute top-0 z-20 left-0 w-full flex items-center justify-center'>
            <div className='flex items-center justify-center gap-10 mx-4 my-6 py-2 px-4 sm:px-8 bg-gray-800 bg-opacity-50 backdrop-blur rounded-xl border border-gray-700'>
                <Link className="text-white hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="/">About</Link>
                <Link className="text-white hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="/">Projects</Link>
                <Link className="text-white hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="/">Contact</Link>
            </div>
        </div>
    )
}

export default Menu;