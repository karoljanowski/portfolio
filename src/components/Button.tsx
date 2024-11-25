import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

type IconProps = 'arrow-up-right' | 'arrow-left' | 'arrow-right'

type ContentWrapperProps = {
  children: React.ReactNode
  rotate?: boolean
  icon?: IconProps
}

export const ContentWrapper = ({ children, rotate, icon }: ContentWrapperProps) => {

  return (
    <div className={twMerge(`flex items-center justify-center gap-2`, rotate && '-rotate-90 lg:rotate-0', icon === 'arrow-left' && 'flex-row-reverse')}>
      <div className="relative overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </div>
      {icon === 'arrow-up-right' && <ArrowUpRight className="-mt-1" />}
      {icon === 'arrow-left' && <ArrowLeft className="w-4 h-4" />}
      {icon === 'arrow-right' && <ArrowRight className="w-4 h-4" />}
    </div>
  )
}

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  rotate?: boolean
  icon?: IconProps
}

export const ButtonLink = ({ href, children, className, rotate, icon }: ButtonLinkProps) => {
  const buttonClasses = twMerge(
    `bg-neutral-100 bg-opacity-15 backdrop-blur rounded-md border border-neutral-700 uppercase text-gray-300 px-6 py-2 overflow-hidden group`,
    className
  )

  return (
    <Link href={href} className={buttonClasses}>
      <ContentWrapper rotate={rotate} icon={icon}>{children}</ContentWrapper>
    </Link>
  )
}

type FormButtonProps = {
  children: React.ReactNode
  className?: string
  rotate?: boolean
  onClick?: () => void
  type?: 'submit' | 'button'
  icon?: IconProps
}

export const FormButton = ({ children, className, rotate, type = 'button', onClick, icon }: FormButtonProps) => {
  const { pending } = useFormStatus()
  
  const buttonClasses = twMerge(
    `bg-neutral-100 bg-opacity-15 backdrop-blur rounded-md border border-neutral-700 uppercase text-gray-300 px-6 py-2 overflow-hidden group flex items-center justify-center`,
    className
  )

  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      disabled={pending}
    >
      {pending ? <Loader2 className="w-6 h-6 animate-spin" /> : <ContentWrapper rotate={rotate} icon={icon}>{children}</ContentWrapper>}
    </button>
  )
}

type StandardButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  icon?: IconProps
}

export const StandardButton = ({ children, className, onClick, icon }: StandardButtonProps) => {
  const buttonClasses = twMerge(
    `bg-neutral-100 bg-opacity-15 backdrop-blur rounded-md border border-neutral-700 uppercase text-gray-300 px-6 py-2 overflow-hidden group`,
    className
  )

  return (
    <button className={buttonClasses} onClick={onClick}>
      <ContentWrapper icon={icon}>{children}</ContentWrapper>
    </button>
  )
}