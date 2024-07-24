'use client';
import React,{useEffect, useState} from 'react'
import HeroSection from '@/components/HeroSection'
import CardWithImage from '@/components/CardWithImage'
import { para } from '@/components/para'
import { Button, Typography } from '@material-tailwind/react'
import { mp } from '@/data';
import BlogCard from '@/components/BlogCard';


const Page = () => {
 const [previ,setPrev]=useState(0);
 const [trend,setTrend]=useState([0,1,2]);

 const clickHandler=(e)=>{
        const name=e.target.name;
        if(name==='prev'){
            if(previ==0)return;
             setPrev(prev=>prev-1);
        }else{
            if(previ==mp.length-3)return;
            setPrev(prev=>prev+1);
        }
 }
 useEffect(()=>{
   if(mp.length<=previ){
    setTrend([mp[previ-3],mp[previ-2],mp[previ-1]]);
   }
    setTrend([mp[previ],mp[previ+1],mp[previ+2]]);
 },[previ])

  return (
    <>
  <div className='w-full flex flex-col gap-16 items-center justify-center'>
    <HeroSection/>
    <Typography variant='paragraph' className='w-5/6 text-xl px-12 py-5 text-customBack font-semibold'>
       {para.para}
    </Typography>
    <div className='cards flex flex-wrap gap-8 w-5/6 lg:w-3/5  justify-center items-center'>
          {mp.map((val,index)=>(
            <CardWithImage category={val} key={index}/>
          ))}
         </div>
    <div className='Trendy w-5/6 px-12 py-5 text-customBack'>
      <Typography variant='h3' className='mb-8'>
        Some Trendy Blogs
      </Typography>
      
      <div className='cards flex flex-wrap gap-2 items-center justify-center'>
      <Button variant='contained' name="prev" className='bg-customBack w-36 h-16 md:hidden sm:hidden lg:block' onClick={clickHandler}>previous</Button>
        {trend.map((cat,index) =>(
          <BlogCard blog={cat} key={index}/>
        ))}
         <Button variant="contained" name="next" className='bg-customBack w-36 h-16 md:hidden sm:hidden lg:block' onClick ={clickHandler}>Next</Button>
      </div>
     
    </div>
    
   
   </div>
     </>
   
  )
}

export default Page
