import Link from "next/link"

const Button = ({href, children}: {href: string, children: React.ReactNode}) => {
    return (
        <Link href={href} className="bg-purple-900 w-max rounded-xl border border-purple-700 text-lg font-bold text-white px-8 mt-5 py-2 hover:bg-purple-800 transition-all duration-300">
            {children}
        </Link>
    )
}

export default Button