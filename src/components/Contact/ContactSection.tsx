import ContactForm from "./ContactForm"
import dynamic from "next/dynamic"

const Bubbles = dynamic(() => import('./Bubbles'), { ssr: false })

const ContactSection = () => {
    return (
        <div className="h-screen px-4 relative container mx-auto flex justify-center items-center glow-effect-cyan-left">
            <div className="max-w-[800px] w-full relative z-10">
                <ContactForm />
            </div>
            <div className="h-full w-full absolute top-0 left-0">
                <Bubbles /> 
            </div>
        </div>
    )
}

export default ContactSection