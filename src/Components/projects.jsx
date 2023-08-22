import React from "react";
import {LuRadio} from 'react-icons/lu'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from "swiper/react";

import Image from '../assets/3d3.jpg'
import Button from "./button"
import Heading from "./sectionHeading";
import Span from "./sectionHeadingSpan";

const Projects = () =>{
    return(
        <section className="text-white" id="projects">
            <div className="max-w-[1000px] w-[90%] mx-auto py-[100px]">
                <Heading>
                   <Span>02</Span>. My projects
                </Heading>

                <div className="w-[100%] h-[100%] mt-12 flex flex-wrap items-center justify-center gap-4">
                    <Project/>
                </div>
            </div>
        </section>
    )
}



const Project = () => {
    return (
      <Swiper
      className="w-[100%] h-[auto] pb-[100px]"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
    //   pagination={{ clickable: true }}
      >
        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 md2:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 1</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <Button><LuRadio/>See live demo</Button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 md2:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 2</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <Button><LuRadio/>See live demo</Button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 md2:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 3</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <Button><LuRadio/>See live demo</Button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 md2:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 4</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <Button>
                        <LuRadio/>See live demo
                    </Button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperNavButton/>

      </Swiper>
    );
};

const SwiperNavButton = () =>{
    const swiper = useSwiper();
    return(
        <div className="flex gap-2 absolute left-[50%] translate-x-[-50%] bottom-1">
            <button onClick={() => swiper.slideNext()} className="bg-gray-900 p-2 rounded-md hover:bg-blue-600 group">
                <IoIosArrowBack className="text-blue-600 group-hover:text-white" size={20}/>
            </button>
            <button onClick={() => swiper.slideNext()} className="bg-gray-900 p-2 rounded-md hover:bg-blue-600 group">
                <IoIosArrowForward className="text-blue-600 group-hover:text-white" size={20}/>
            </button>
        </div>
    )
}

export default Projects