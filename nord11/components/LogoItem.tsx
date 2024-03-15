import React from "react"
import Image, { StaticImageData } from "next/image"

interface LogoItemProps {
    className?: string
    src: StaticImageData
}

const LogoItem = ({ className, src }: LogoItemProps) => {
    return (
        <div className={`w-full sm:w-[384px] h-[130px] rounded-2xl bg-dark-blue shadow-md flex items-center justify-center ${className}`}>
            <Image src={src} alt='partner logo' />
        </div>
    )
}

export default LogoItem
