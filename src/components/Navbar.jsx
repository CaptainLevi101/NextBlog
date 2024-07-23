"use client";

import Link from 'next/link';
import React from 'react'
import SearchBar from './SearchBar';
import Image from 'next/image';

const Navbar = () => {
  const linkClasses = 'font-bold text-white hover:text-red-600 py-5';
  return (
    <div className='main z-10 bg-customBlue flex items-center px-10 py-2 justify-between'>
     <Image 
     src="https://res.cloudinary.com/dsja09265/image/upload/v1719900558/xgpiqnonn7qjiqwxmldr.png"
     width={0}
     height={0}
     alt="Logo"
     className="w-16 h-12 rounded-xl"
     />
    <div className='flex gap-16 items-center justify-end'>
    <Link href='/'className={linkClasses}> Home</Link>
    <Link href="/about" className={linkClasses}>about</Link>
    <Link href="/contact" className={linkClasses}>Contact</Link>
    <Link href="/favourites" className={linkClasses}>Favourites</Link>
    <SearchBar/>
    </div>
    </div>
  )
}

export default Navbar
