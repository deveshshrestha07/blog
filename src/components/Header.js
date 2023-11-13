import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-[#1C5567] p-4 px-20 flex justify-between items-center ">
    <div className="flex items-center">
        <Link href="/"><img
        src="/logo.jpeg" 
        alt="Logo"
        className="w-20 h-20 mr-2"
      /></Link>
      
    </div>


    <nav className="space-x-10 text-[20px]">
      <Link href="/" className="text-white hover:text-blue-300 ">
        Home
      </Link>
      <Link href="/about" className="text-white hover:text-blue-300">
        About
      </Link>
      <Link href="/blog" className="text-white hover:text-blue-300">
        Blog
      </Link>
      <Link href="/contact" className="text-white hover:text-blue-300">
        Contact
      </Link>
  
    </nav>
  </header>
  
  )
}

export default Header