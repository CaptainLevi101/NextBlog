'use client';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import Link from "next/link";
   
  const CardWithImage=({category})=>{
    const image=category.image;
   
    return (
      <Link 
      href="">
      <Card
        shadow={false}
        className="relative grid h-[25rem] w-[20rem] 
        px-12 
        items-end justify-center overflow-hidden text-center
         transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg
        "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          style={{ backgroundImage: `url(${image})` }}
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          
          <Typography variant="h5" className="mb-4 text-gray-400">
           {category.cat}
          </Typography>
         
        </CardBody>
      </Card>
      </Link>
    );
  }

  export default CardWithImage;