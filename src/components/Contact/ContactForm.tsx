'use client'

import { useFormState, useFormStatus } from "react-dom"
import { handleFormSubmit } from "@/utils/actions"
import { FormButton } from "../Button"
import { Toaster, toast } from "react-hot-toast"
import { useEffect } from "react"

const ContactForm = () => {
    const [state, action] = useFormState(handleFormSubmit, {success: false, message: '', errors: []})

    useEffect(() => {
        if(state.errors && state.message) {
            toast.error(state.message)
        }
        if(state.success) {
            toast.success(state.message)
        }
    }, [state])

    return (
        <>
            <Toaster  />
            <div className="backdrop-blur bg-neutral-950 bg-opacity-50 p-8 rounded-md relative z-10">
                <h2 className="text-4xl font-bold uppercase text-cyan-500">Lets&apos;s work together</h2>
                <p className="text-white text-lg mb-5">Send me a message and I&apos;ll get back to you as soon as possible</p>
                <form action={action} className="flex flex-col gap-2 ">
                <div className="flex flex-col">
                    <input type="text" id="name" name="name" className="bg-transparent py-4 rounded-none px-2 border-gray-300 border-b focus:border-gray-500 outline-none" placeholder="Name" />
                    {state.errors?.find(error => error.key === 'name') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'name')?.message}</p>}
                </div>

                <div className="flex flex-col">
                    <input type="email" id="email" name="email" className="bg-transparent py-4 rounded-none px-2 border-gray-300 border-b focus:border-gray-500 outline-none" placeholder="Email" />
                    {state.errors?.find(error => error.key === 'email') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'email')?.message}</p>}
                </div>

                <div className="flex flex-col">
                    <textarea rows={2} id="message" name="message" className="bg-transparent py-4 rounded-none px-2 border-gray-300 border-b focus:border-gray-500 outline-none" placeholder="Message"></textarea>
                    {state.errors?.find(error => error.key === 'message') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'message')?.message}</p>}
                </div>

                <FormButton icon="arrow-up-right" type="submit" className="bg-cyan-800 border-cyan-800 bg-opacity-80 mt-4">Send message</FormButton>
            </form>
        </div>
        </>
    )
}

export default ContactForm