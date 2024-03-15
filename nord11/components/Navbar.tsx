import React from "react"
import Image from "next/image"
import Logo from "../public/logoBg.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries, CiSquareRemove } from "react-icons/ci"

const Navbar = () => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    React.useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <header
            className={`w-full flex justify-between lg:justify-start items-center fixed z-50 duration-200 transition-all ${
                isScrolled ? "left-10 top-4" : "left-10 lg:left-24 top-12"
            }`}>
            <Link href='/'>
                <Image
                    src={Logo}
                    width={isScrolled ? 170 : 220}
                    alt='logo'
                    className='lg:mr-28 duration-200 transition-all'
                />
            </Link>
            <nav className='bg-dark-blue rounded-full shadow-lg hidden lg:block'>
                <ul className='flex justify-between gap-10 xl:gap-20 p-4 text-white font-header text-base whitespace-nowrap xl:text-2xl px-20 py-6'>
                    <Link href='/#our-values'>
                        <li>Our Values</li>
                    </Link>
                    <Link href='/portfolio'>
                        <li
                            className={`${
                                pathname === "/portfolio" && "underline"
                            }`}>
                            Portfolio
                        </li>
                    </Link>
                    <Link href='/team'>
                        <li
                            className={`${
                                pathname === "/team" && "underline"
                            }`}>
                            Team
                        </li>
                    </Link>
                    <Link href='/#contact'>
                        <li>Contact</li>
                    </Link>
                    <li>Blog</li>
                    <li className='opacity-50 cursor-not-allowed'>Jobs</li>
                </ul>
            </nav>
            <button
                onClick={() => setIsMenuOpen(true)}
                className='mr-16 flex lg:hidden justify-center items-center bg-dark-blue rounded-full text-text-white shrink-0 w-[80px] h-[80px]'>
                <CiMenuFries size={32} />
            </button>
            <div
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } fixed top-0 left-0 w-full h-full bg-dark-blue z-50`}>
                <button
                    className='absolute top-4 right-4 text-text-white'
                    onClick={() => setIsMenuOpen(false)}>
                    <CiSquareRemove size={48} />
                </button>
                <nav className='flex flex-col items-center justify-center h-full gap-10 text-white font-header text-2xl'>
                    <Link href='/#our-values'>
                        <p>Our Values</p>
                    </Link>
                    <Link href='/portfolio'>
                        <p
                            className={`${
                                pathname === "/portfolio" && "underline"
                            }`}>
                            Portfolio
                        </p>
                    </Link>
                    <Link href='/team'>
                        <p className={`${pathname === "/team" && "underline"}`}>
                            Team
                        </p>
                    </Link>
                    <Link href='/#contact'>
                        <p>Contact</p>
                    </Link>
                    <p>Blog</p>
                    <p className='opacity-50 cursor-not-allowed'>Jobs</p>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
