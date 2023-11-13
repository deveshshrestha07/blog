import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from 'public/hero.jpg'
import Logo from 'public/logo.jpeg'


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Left side - Logo and Paragraph */}
                <div className="w-full md:w-1/3 p-4">
                    <Image src={Logo} alt="Logo" className="w-20 h-20 mb-4" />
                    <p className="text-gray-300">Lorem ipssumLorem ipssum Lorem ipssumLorem ipssumLorem ipssumLorem ipssumLorem ipssumLorem ipssumLorem ipssumLorem ipssumLorem ipssum</p>
                </div>

                {/* Middle - Menu */}
                <div className="w-full md:w-1/3 p-4">
                    <div className=' text-center'>
                        <h2 className='text-[40px] inline-block'>Menu</h2>
                    </div>
                    <ul className=" text-center ">
                        <li className='text-[25px]'><Link href="#">Home</Link></li>
                        <li className='text-[25px]'><Link href="/about">About</Link></li>
                        <li className='text-[25px]'><Link href="/blog">Blog</Link></li>
                        <li className='text-[25px]'><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Right side - Heading, Picture, and Secondary Heading */}
                <div className="w-full md:w-1/3 p-4 text-center">
                    <h3 className="text-xl font-bold mb-4">Recent Blog</h3>
                    <Image src={Hero} alt="Contact Pic" className="w-40 h-40 rounded-[5px] mx-auto cursor-pointer" />
                    <h4 className="text-lg font-semibold mt-4">Contact Information</h4>
                </div>
            </div>

            {/* Bottom Row - Copyright Notice */}
            <div className="container mx-auto mt-4">
                <p className="text-center text-gray-400">© 2023 Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer