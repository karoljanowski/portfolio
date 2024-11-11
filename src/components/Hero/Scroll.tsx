import { MouseIcon } from 'lucide-react'

const Scroll = () => {
    return (
        <div className='absolute bottom-10 left-0 w-full flex justify-center items-center gap-2'>
            <MouseIcon className='w-5 h-5' />
            <span className='text-white text-sm'>Scroll down</span>
        </div>
    )
}

export default Scroll;