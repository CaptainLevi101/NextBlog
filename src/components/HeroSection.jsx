'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button, Typography } from '@material-tailwind/react'

const HeroSection = () => {
    const text="Dive into a World of Insightful Content: At Blogger, we offer a diverse collection of articles and features that span the latest trends, emerging topics, and expert insights in Tech, Science, Daily Life, and Sports. Our blog is designed to deliver valuable knowledge, spark meaningful conversations, and provide actionable takeaways for both enthusiasts and professionals.";
    const [displayedText, setDisplayedText] = useState(text[0]);

     useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = index+1;
            setDisplayedText(prev => prev + text[index]);
            if (index ==text.length-1) {
                clearInterval(intervalId);
            }
            console.log(index);
        }, 100);
        
        return () => clearInterval(intervalId);
    }, []);

    
   
  return (
    <div className='w-full h-[600px] relative'>
    <Navbar/>
    <Image 
   src="https://res.cloudinary.com/dsja09265/image/upload/v1713266360/peter-rovder-X_5kMOSxLzw-unsplash_xvdofu.jpg" 
   alt="My Image"
   width="0"
   height={0}
   sizes="100vw"
   className="w-full h-[520px]"/>
    <div className='absolute top-60 flex items-center w-full gap-16'>
        <div className='pl-24'>
        <Typography variant="h1" className='text-white font-bold'>Blogger</Typography>
        <Button variant="outlined" className='text-white border-white font-bold'>Get Started</Button>
        </div>
       <Typography variant='h4' className=" lg:pl-36 lg:pr-36 sm:pr-24 text-white">
        {displayedText}
         </Typography>
        
   </div>
   
    </div>
  )
}

export default HeroSection
