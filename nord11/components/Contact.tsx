import React, { ReactEventHandler } from "react"
import Container from "./Container"

const Contact = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault() 

        // Collects form data
        const formData = new FormData(event.target)
        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        // Constructs the mailto link
        const mailtoLink = `mailto:hello@nord11.com?subject=Nord11 Form Submission from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`

        // Triggers the mailto link
        window.location.href = mailtoLink
    }

    return (
        <section className='bg-dark-blue'>
            <Container className='text-text-white font-header pt-32 flex flex-col first-line:xl:flex-row justify-between gap-32'>
                <div className='shrink-0'>
                    <h2 className='text-5xl'>CONTACT US</h2>
                    <p className='max-w-[340px] mt-12 text-2xl font-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vestibulum pulvinar metus, nec posuere ex malesuada
                    </p>
                </div>
                <form className='w-full' onSubmit={handleSubmit}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        className='border-b-[1px] border-text-white bg-transparent outline-none font-content text-text-white pb-4 text-2xl placeholder-text-white/40 w-full'
                    />
                    <input
                        name='email'
                        type='text'
                        placeholder='Email'
                        className='border-b-[1px] border-text-white bg-transparent outline-none font-content text-text-white pb-4 text-2xl placeholder-text-white/40 w-full mt-20'
                    />
                    <input
                        name='message'
                        type='text'
                        placeholder='Message'
                        className='border-b-[1px] border-text-white bg-transparent outline-none font-content text-text-white pb-4 text-2xl placeholder-text-white/40 w-full mt-48'
                    />

                    <button
                        type='submit'
                        className='text-text-black bg-text-white rounded-full shadow-lg font-header py-5 px-20 lg:px-36 text-2xl mt-14 mb-20'>
                        SUBMIT
                    </button>
                </form>
            </Container>
        </section>
    )
}

export default Contact
