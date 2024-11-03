import { Github, Linkedin, Mail } from 'lucide-react'

const Socials = () => {
    return (
        <div className="absolute bottom-0 right-0 w-max h-max z-10">

            <div className="grid grid-cols-3 bg-gray-700 bg-opacity-50 backdrop-blur rounded-xl border border-gray-700 text-white m-12 gap-2">
                <div className="grid place-items-center p-4">
                    <Github className='w-6 h-6' strokeWidth={1.375} />
                </div>
                <div className="grid place-items-center p-4">
                    <Linkedin className='w-6 h-6' strokeWidth={1.375} />
                </div>
                <div className="grid place-items-center p-4">
                    <Mail className='w-6 h-6' strokeWidth={1.375} />
                </div>
        </div>
        </div>
    )
}

export default Socials;