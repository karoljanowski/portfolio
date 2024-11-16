'use client'
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { useFormStatus } from "react-dom"
import { Loader2 } from 'lucide-react'

type ButtonProps = {
  href?: string
  children: React.ReactNode
  className?: string
  rotate?: boolean
  type?: 'submit' | 'button'
  onClick?: () => void
}

const Button = ({ href, children, className, rotate, type = 'button', onClick }: ButtonProps) => {
  const { pending } = useFormStatus()

  const buttonClasses = twMerge(
    `bg-neutral-100 bg-opacity-15 backdrop-blur rounded-md border border-neutral-700 uppercase text-gray-300 px-6 py-2 overflow-hidden group`,
    className
  )
  
  const contentWrapper = (
    <div className={twMerge(`flex items-center justify-center gap-2`, rotate && '-rotate-90 lg:rotate-0')}>
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
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {contentWrapper}
      </Link>
    )
  }

  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      disabled={pending}
    >
      {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : contentWrapper}
    </button>
  )
}

export default Button