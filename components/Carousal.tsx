"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import umairImage from "@/public/images/Umair Teacher.jpg"
import JawwadImage from "@/public/images/Jawwad Teacher.jpg"
import sabirImage from "@/public/images/Sabir Teacher.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"

export function CarouselPlugin() {

    const [carousel, setCarousel] = useState(true)

    const plugin = React.useRef(
        Autoplay({
            delay: 1000,
            stopOnInteraction: carousel,
        })
    )

    const Teacheer = [
        { name: "Muhammad Umair", degree: "Hafiz", language: ["Urdu", "Spanish"], imageLink: umairImage },
        { name: "Muhammad Sabir", degree: "Hafiz & Islamic Scholar", language: ["Urdu", "Spanish"], imageLink: sabirImage },
        { name: "Muhammad Jawwad", degree: "Hafiz", language: ["Urdu", "English"], imageLink: JawwadImage },
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xl mx-auto"
            opts={{
                loop: true,
                align: "start",
                containScroll: "trimSnaps",
            }}
            onMouseEnter={() => {
                setCarousel(false);
                plugin.current.stop();
            }}
            onMouseLeave={() => {
                setCarousel(true);
                plugin.current.play();
            }}
        >

            <CarouselContent>
                {Teacheer.map((teacher, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="group relative overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950">
                                <CardContent className="flex flex-col items-center p-0">
                                    <div className="relative h-56 w-full overflow-hidden bg-muted">
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        
                                        {/* Replace with actual Image component */}
                                        <div className="flex h-full w-full items-center justify-center object-scale-down bg-slate-100 text-slate-400 transition-transform duration-500 group-hover:scale-105 dark:bg-slate-800">
                                            <Image src={teacher.imageLink} alt={teacher.name} layout="fill" objectFit="cover" />
                                        </div>
                                    </div>
                                    
                                    <div className="flex w-full flex-col gap-3 p-5 text-center">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{teacher.name}</h3>
                                            <p className="text-sm font-medium text-primary">{teacher.degree}</p>
                                        </div>
                                        
                                        <div className="flex flex-wrap justify-center gap-1.5">
                                            {teacher.language.map((lang, idx) => (
                                                <span key={idx} className="px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 rounded-full">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <p className="mt-1 text-xs leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400">
                                            Experienced in teaching Quran with Tajweed and Islamic studies for over 5 years with a focus on student engagement.
                                        </p>

                                        <button className="mt-2 w-full rounded-md bg-primary py-2 text-xs font-semibold text-primary-foreground opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 hover:bg-primary/90">
                                            View Profile
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    )
}
