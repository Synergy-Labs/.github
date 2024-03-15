import React from "react"
import Logo from "../public/logo.png"
import Image from "next/image"

const Footer = () => {
    return (
        <footer>
            <Image className='mx-auto mt-20 mb-10' width={300} src={Logo} alt='logo' />
            <p className='text-2xl font-content text-text-black text-center mb-10'>© 2024 ALL RIGHTS RESERVED</p>
        </footer>
    )
}

export default Footer
