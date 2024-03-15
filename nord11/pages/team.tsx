import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import React from "react"
import Image, { StaticImageData } from "next/image"

import Example from "@/public/team/example.png"

import BigRune from "@/public/bigRune.png"
import { Parallax, useParallax } from "react-scroll-parallax"

const Team = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 180],
    })

    return (
        <main className='relative overflow-hidden'>
            <Navbar />

            <Image
                className='absolute top-[100px] left-[-800px]'
                src={BigRune}
                alt='big rune'
                // @ts-ignore
                ref={parallax.ref}
            />

            <div className='mt-64 text-text-black'>
                <h2 className='text-5xl font-header text-center'>TEAM</h2>
                <p className='mt-4 text-2xl font-content text-center mx-auto mb-20'>
                    Meet our team of entrepreneurs, engineers, and network
                    builders.
                </p>
            </div>
            <section className='flex flex-col lg:flex-row items-center justify-center gap-8 mb-32'>
                <Person
                    img={Example}
                    name='Big Boss'
                    role='CEO & Managing Partner'
                    description="Hustler's univeristy graduate. PhD in shitcoins."
                    left
                />
                <Person
                    img={Example}
                    name='Big Boss'
                    role='CEO & Managing Partner'
                    description="Hustler's univeristy graduate. PhD in shitcoins."
                />
            </section>

            <Contact />
            <Image
                className='absolute right-[-1000px] bottom-[-500px]'
                src={BigRune}
                alt='big rune'
            />
            <Footer />
        </main>
    )
}

export default Team
interface PersonProps {
    left?: boolean
    name: string
    img: StaticImageData
    role: string
    description: string
}

const Person = ({ left, name, img, role, description }: PersonProps) => {
    const [hover, setHover] = React.useState(false)

    return (
        <div className='relative'>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='w-[342px] h-[538px] rounded-2xl relative overflow-hidden z-10 hover:scale-110 duration-200 transition-all'>
                <Image src={img} alt='team member' />

                <p className='text-text-white font-header text-[48px] text-center flex w-full justify-center absolute bottom-0 z-20'>
                    {name}
                </p>
            </div>
            <div
                className={`absolute top-0 z-0 bg-dark-blue duration-200 transition-all text-text-white ${
                    left ? "rounded-l-3xl right-0" : "rounded-r-3xl left-0"
                } shadow-lg font-header text-lg xl:leading-tight xl:text-[36px] py-4 px-8`}
                style={{
                    translate: hover ? (left ? "-342px" : "342px") : "0px",
                    opacity: hover ? "100%" : "0%",
                }}>
                {role}
            </div>

            <div
                className={`absolute top-[6rem] xl:top-[8rem] z-0 bg-dark-blue duration-200 transition-all text-text-white ${
                    left ? "rounded-l-3xl right-0" : "rounded-r-3xl left-0"
                } shadow-lg font-header text-base xl:text-2xl py-4 px-8`}
                style={{
                    translate: hover ? (left ? "-342px" : "342px") : "0px",
                    opacity: hover ? "100%" : "0%",
                }}>
                {description}
            </div>
        </div>
    )
}
