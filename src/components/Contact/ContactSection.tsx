import ContactForm from "./ContactForm"
import dynamic from "next/dynamic"

const Plane = dynamic(() => import('./Plane'), { ssr: false })

const ContactSection = () => {
    return (
        <div className="relative container mx-auto py-20 px-4 glow-effect-cyan-left">
            <h2 className="text-4xl font-bold mb-10">Lets&apos;s work together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
                <ContactForm />
                <div className="h-full w-full relative row-start-1 col-start-1 md:col-start-2">
                    <Plane /> 
                </div>
            </div>
        </div>
    )
}

export default ContactSection