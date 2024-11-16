'use client'

import { useFormState, useFormStatus } from "react-dom"
import { handleFormSubmit } from "@/utils/actions"
import Button from "../Button"
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
        <div>
            <Toaster  />
            <form className="flex flex-col gap-2 backdrop-blur bg-neutral-950 bg-opacity-30 p-4 rounded-md row-start-1 col-start-1 relative z-10">
                <div className="flex flex-col">
                    <input type="text" id="name" name="name" className="bg-transparent py-4 rounded-none px-2 border-gray-700 border-b focus:border-gray-500 outline-none" placeholder="Name" />
                    {state.errors?.find(error => error.key === 'name') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'name')?.message}</p>}
                </div>

                <div className="flex flex-col">
                    <input type="email" id="email" name="email" className="bg-transparent py-4 rounded-none px-2 border-gray-700 border-b focus:border-gray-500 outline-none" placeholder="Email" />
                    {state.errors?.find(error => error.key === 'email') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'email')?.message}</p>}
                </div>

                <div className="flex flex-col">
                    <textarea rows={4} id="message" name="message" className="bg-transparent py-4 rounded-none px-2 border-gray-700 border-b focus:border-gray-500 outline-none" placeholder="Message"></textarea>
                    {state.errors?.find(error => error.key === 'message') && <p className="text-red-500 text-sm">{state.errors?.find(error => error.key === 'message')?.message}</p>}
                </div>

                <Button type="submit" className="bg-cyan-800 border-cyan-950 bg-opacity-80 mt-4">Send message</Button>
            </form>
        </div>
    )
}

export default ContactForm