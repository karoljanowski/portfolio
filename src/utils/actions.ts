'use server'

import prisma from "./prisma"

type Error = {
    key: string
    message: string
}

type State = {
    success?: boolean
    errors?: Error[]
    message?: string
}

export const handleFormSubmit = async (state: State, formData: FormData) => {
    const formDataObject = Object.fromEntries(formData.entries())

    const name = formDataObject.name
    const email = formDataObject.email
    const message = formDataObject.message

    if(!name || !email || !message) {

        const errors: Error[] = []

        if(!name) {
            errors.push({ key: 'name', message: 'Name is required' })
        }
        if(!email) {
            errors.push({ key: 'email', message: 'Email is required' })
        }
        if(!message) {
            errors.push({ key: 'message', message: 'Message is required' })
        }

        return {
            success: false,
            message: 'Please check the form for errors',
            errors: errors
        }
    }

    if(typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
        return {
            success: false,
            message: 'Something went wrong'
        }
    }
    try{
        await prisma.contact.create({ data: { name, email, message } })
    } catch(error) {
        console.log(error)
        return {
            success: false,
            message: 'Something went wrong'
        }
    }

    return {
        success: true,
        message: 'Message sent successfully'
    }
}