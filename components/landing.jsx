"use client"
import Image from "next/image"
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "./ui/carousel"
import config from "../jsconfig.json"


export default function Landing() {
    return (
        <section className="relative">
            <Carousel
                opts={{ loop: true }}
            >
                <CarouselContent className="bg-slate-800 h-[100vh]">
                    <CarouselItem>
                        <Image alte="...." src="/images/a.jpg" width={1280} height={853} className="w-full h-full" />
                    </CarouselItem>
                    <CarouselItem>
                        <Image alte="...." src="/images/b.jpg" width={1280} height={853} className="w-full h-full" />
                    </CarouselItem>
                    <CarouselItem>
                        <Image alte="...." src="/images/c.jpg" width={1280} height={853} className="w-full h-full" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className="right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 text-primary-site hover:text-gray-50 bg-primary-transparent" />
                <CarouselPrevious className="left-8 md:left-12 top-1/2 -translate-y-1/2 z-30  hover:text-gray-50 text-primary-site bg-primary-transparent" />
            </Carousel>
            <div className="w-full h-full absolute top-0 left-0 bg-primary-transparent z-10 flex flex-col justify-center items-center md:items-start px-20 md:px-36">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center md:text-left md:w-1/2">Welcome to  {config.siteName}</h1>
                <p className="text-gray-200 mt-10 md:w-1/2  text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium dicta, quo dignissimos iste soluta eius velit blanditiis officiis alias.</p>
                <button className="border border-primary-site text-primary-site px-16 py-3 text-sm font-semibold rounded-full my-10 w-max bg-primary-transparent">More Info</button>
            </div>
        </section>
    )
}