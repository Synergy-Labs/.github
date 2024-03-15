import Image from "next/image"
import Navbar from "@/components/Navbar"
import Container from "@/components/Container"
import TreeTop from "@/public/treeTop.png"
import Rune from "@/public/rune.png"
import RootBg from "@/public/rootBg.png"
import Star from "@/public/star.png"
import Adshares from "@/public/portfolio/adshares.png"
import Ikonic from "@/public/portfolio/ikonic.png"
import Dequest from "@/public/portfolio/dequest.png"
import Safegram from "@/public/portfolio/safegram.png"
import Karrot from "@/public/portfolio/karrot.png"
import Tenset from "@/public/portfolio/tenset.png"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Link from "next/link"
import LogoItem from "@/components/LogoItem"

export default function Home() {
    return (
        <main>
            <Navbar />
            <section className='text-text-black relative overflow-hidden'>
                <Image
                    src={TreeTop}
                    alt='tree'
                    draggable={false}
                    className='absolute top-0 right-0 z-0 h-full w-auto opacity-10 2xl:opacity-50 3xl:opacity-100'
                />
                <Container className='z-10 mt-64 relative'>
                    <div className='max-w-[800px]'>
                        <h1 className='font-header text-[64px] leading-[1]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h1>
                        <p className='text-xl font-content mt-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed vestibulum pulvinar metus, nec posuere ex
                            malesuada a. Cras non sapien sapien. Suspendisse non
                            malesuada nisl. Nulla eu tortor sapien. Aenean nec
                            ante quis lacus lacinia viverra. Quisque lacus urna,
                            luctus at euismod sed, rhoncus id nibh. Curabitur
                            non mauris condimentum enim interdum blandit et non
                            elit. Mauris ultrices gravida lacinia.
                        </p>
                        <Link href='#contact'>
                            <button className='text-white bg-dark-blue rounded-full shadow-lg font-header py-5 px-20 text-2xl mt-20'>
                                CONTACT US
                            </button>
                        </Link>
                    </div>
                    <div className='flex items-center flex-col lg:flex-row justify-between mt-48 mb-16'>
                        <div className='text-text-black font-header text-center'>
                            <Image
                                src={Rune}
                                alt='rune'
                                width={190}
                                height={190}
                                className='mx-auto'
                                draggable={false}
                            />
                            <p className='text-[64px] -mt-36'>10</p>
                            <p className='text-[32px] mt-10'>
                                YEARS OF EXPERIENCE
                            </p>
                        </div>

                        <div className='text-text-black font-header text-center'>
                            <Image
                                src={Rune}
                                alt='rune'
                                width={190}
                                height={190}
                                className='mx-auto'
                                draggable={false}
                            />
                            <p className='text-[40px] -mt-[124px]'>200+</p>
                            <p className='text-[32px] mt-14'>INVESTMENTS</p>
                        </div>

                        <div className='text-text-black font-header text-center'>
                            <Image
                                src={Rune}
                                alt='rune'
                                width={190}
                                height={190}
                                className='mx-auto'
                                draggable={false}
                            />
                            <p className='text-[32px] -mt-[118px]'>30 000</p>
                            <p className='text-[32px] mt-16'>
                                COMMUNITY MEMBERS
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='bg-dark-blue w-full'>
                <Image
                    src={RootBg}
                    alt='root bg'
                    className='w-full absolute z-0'
                />
                <div id='our-values'></div>
                <Container className='text-text-white font-header pt-32 relative z-10'>
                    <h2 className='text-5xl'>OUR VALUES</h2>
                    <p className='max-w-[740px] mt-12 text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vestibulum pulvinar metus, nec posuere ex malesuada
                        a. Cras non sapien sapien. Suspendisse non malesuada
                        nisl. Nulla eu tortor sapien. Aenean nec ante quis lacus
                        lacinia viverra. Quisque lacus urna,{" "}
                    </p>
                    <div className='flex flex-col xl:flex-row items-center justify-around w-full mt-48 pb-20'>
                        <div>
                            <div className='bg-white rounded-full w-[188px] h-[188px] aspect-square'></div>
                            <p className='text-center text-2xl font-header mt-2'>
                                VALUE 1
                            </p>
                        </div>

                        <div>
                            <div className='bg-white rounded-full w-[188px] h-[188px] aspect-square'></div>
                            <p className='text-center text-2xl font-header mt-2'>
                                VALUE 1
                            </p>
                        </div>

                        <div>
                            <div className='bg-white rounded-full w-[188px] h-[188px] aspect-square'></div>
                            <p className='text-center text-2xl font-header mt-2'>
                                VALUE 1
                            </p>
                        </div>

                        <div>
                            <div className='bg-white rounded-full w-[188px] h-[188px] aspect-square'></div>
                            <p className='text-center text-2xl font-header mt-2'>
                                VALUE 1
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='relative overflow-hidden'>
                <Image
                    src={Star}
                    alt='star bg'
                    className='h-[120%] -top-20 w-auto absolute z-0 left-0 right-0 mx-auto'
                />
                <Container className='text-text-black font-header relative z-10'>
                    <h2 className='text-5xl pt-36'>PORTFOLIO</h2>
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
                    <div className='flex justify-center mb-32'>
                        <Link href='/portfolio'>
                            <button className='text-white bg-dark-blue rounded-full shadow-lg font-header py-5 px-20 text-2xl mt-20'>
                                LOAD MORE
                            </button>
                        </Link>
                    </div>
                </Container>
            </section>
            <div id='contact'></div>
            <Contact />
            <Footer />
        </main>
    )
}
