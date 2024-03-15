import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import React from "react"
import Image from "next/image"

import Adshares from "@/public/portfolio/adshares.png"
import Ikonic from "@/public/portfolio/ikonic.png"
import Dequest from "@/public/portfolio/dequest.png"
import Safegram from "@/public/portfolio/safegram.png"
import Karrot from "@/public/portfolio/karrot.png"
import Tenset from "@/public/portfolio/tenset.png"

import BigRune from "@/public/bigRune.png"
import LogoItem from "@/components/LogoItem"
import Container from "@/components/Container"

const Portfolio = () => {
    return (
        <main className='relative overflow-hidden'>
            <Navbar />
            <div className='mt-64 text-text-black'>
                <h2 className='text-5xl font-header text-center'>PORTFOLIO</h2>
                <p className='mt-4 text-2xl font-content text-center mx-auto'>
                    The companies we back are changing the world. See how.
                </p>
            </div>
            <Container className='mb-64'>
                <div className='flex flex-col lg:flex-row gap-4 mb-4 justify-center mt-32'>
                    <LogoItem src={Adshares} className='px-10' />
                    <LogoItem src={Ikonic} className='px-20' />
                    <LogoItem src={Dequest} className='px-10' />
                </div>
                <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                    <LogoItem src={Safegram} className='px-10' />
                    <LogoItem src={Karrot} className='px-16' />
                    <LogoItem src={Tenset} className='px-10' />
                </div>
            </Container>
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

export default Portfolio
