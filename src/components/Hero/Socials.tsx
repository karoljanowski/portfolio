import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
// TODO: Mobile version
const Socials = () => {
    return (
        <div className="absolute bottom-0 right-0 w-max h-max z-10 hidden md:block">

            <div className="grid grid-cols-3 bg-gray-700 bg-opacity-50 backdrop-blur rounded-xl border border-gray-700 text-white m-4 sm:m-12 gap-4 p-2">
                <div className="grid place-items-center">
                    <Link className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300' href="https://github.com/karoljanowski">
                        <Github className='w-6 h-6' strokeWidth={1.375} />
                    </Link>
                </div>
                <div className="grid place-items-center">
                    <Link className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300' href="https://www.linkedin.com/in/karoljanowski/">
                        <Linkedin className='w-6 h-6' strokeWidth={1.375} />
                    </Link>
                </div>
                <div className="grid place-items-center">
                    <Link className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300' href="mailto:karol.jj@icloud.com">
                        <Mail className='w-6 h-6' strokeWidth={1.375} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Socials;