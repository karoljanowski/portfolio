import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const Button = ({href, children, className}: {href: string, children: React.ReactNode, className?: string}) => {
    return (
        <Link href={href} className={`bg-neutral-100 bg-opacity-15 backdrop-blur rounded-md border border-neutral-700 uppercase text-gray-300 px-6 py-2 overflow-hidden group ${className}`}>
            <div className="flex items-center gap-2">
                <div className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        {children}
                    </span>
                    <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        {children}
                    </span>
                </div>
                <ArrowUpRight className="-mt-1" />
            </div>
        </Link>
    )
}

export default Button