import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
// TODO: Mobile version
const Socials = () => {
    return (
        <div className="flex justify-center items-center mx-auto lg:ml-auto lg:mr-0 bg-gray-800 bg-opacity-50 backdrop-blur rounded-lg border border-gray-700 text-white gap-4 py-2 px-3">
            <div className="grid place-items-center">
                <Link className='hover:bg-gray-700 text-gray-300 hover:text-white p-1.5 rounded-md transition-all duration-300' href="https://github.com/karoljanowski">
                    <Github className='w-4 h-4 lg:w-5 lg:h-5' strokeWidth={1.375} />
                </Link>
            </div>
            <div className="grid place-items-center">
                <Link className='hover:bg-gray-700 text-gray-300 hover:text-white p-1.5 rounded-md transition-all duration-300' href="https://www.linkedin.com/in/karol-janowski-35463925b//">
                    <Linkedin className='w-4 h-4 lg:w-5 lg:h-5' strokeWidth={1.375} />
                </Link>
            </div>
            <div className="grid place-items-center">
                <Link className='hover:bg-gray-700 text-gray-300 hover:text-white p-1.5 rounded-md transition-all duration-300' href="mailto:karol.jj@icloud.com">
                    <Mail className='w-4 h-4 lg:w-5 lg:h-5' strokeWidth={1.375} />
                </Link>
            </div>
        </div>
    )
}

export default Socials;