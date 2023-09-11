'use client'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets:['latin'],
weight:'500'})

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className='fixed w-full h-24 bg-white'>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
                <div>
                   <Link href="/"><h2 className='text-2xl font-bold'>STATIC</h2></Link>
                </div>
                <div className={`${poppins} hidden sm:flex`}>
                    <ul className='hidden sm:flex'>
                        <Link href="/">
                            <li className='ml-10 uppercase hover:border-b text-lg'>Home</li>
                        </Link>
                        <Link href="/blog">
                            <li className='ml-10 uppercase hover:border-b text-lg'>Blog</li>
                        </Link>
                        <Link href="/about">
                            <li className='ml-10 uppercase hover:border-b text-lg'>About</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                    <Bars3Icon className='text-black h-6 w-6' size={25}/>
                </div>
            </div>
            <div className={
                menuOpen
                 ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                 : "fixed left-[-100%] top-0 p-10 ease-in-out duration-800"
            }>
            <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <XMarkIcon className='h-6 w-6'/>
                </div>
            </div>
            <div className='flex-col py-4'>
            <ul className=''>
                        <Link href="/">
                            <li className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)}>Home</li>
                        </Link>
                        <Link href="/blog">
                            <li className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)}>Blog</li>
                        </Link>
                        <Link href="/about">
                            <li className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)}>About</li>
                        </Link>
                    </ul>
            </div>
            <div className='flex flex-row justify-around pt-10 items-center'>
                <AiOutlineInstagram size={30} className='cursor-pointer'/>
                <AiOutlineFacebook size={30} className='cursor-pointer'/>
                <AiOutlineTwitter size={30} className='cursor-pointer'/>
            </div>
            <div className='mx-auto items-center justify-between pt-5 text-center'>
            <Link href="/"><h2 className=''>STATIC</h2></Link>
            </div>

            </div>
        </nav>
    )
}

export default Navbar;