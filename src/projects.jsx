import React from "react";
import {LuRadio} from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from './assets/3d3.jpg'

const Projects = () =>{
    return(
        <section className="text-white" id="projects">
            <div className="max-w-[1000px] w-[90%] mx-auto py-[100px]">
                <h2 className="text-5xl font-extrabold lg:text-4xl md:text-3xl"><span className="text-blue-600">02</span>. My projects</h2>

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
      className="w-[100%] h-[auto] pb-[50px]"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
    //   navigation
      loop={true}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 sm:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 1</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <button className="flex items-center gap-2 px-7 py-3 mt-8 bg-blue-600 rounded-lg hover:bg-blue-800 duration-300">
                        <LuRadio/> See live demo
                    </button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 sm:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 2</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <button className="flex items-center gap-2 px-7 py-3 mt-8 bg-blue-600 rounded-lg hover:bg-blue-800 duration-300">
                        <LuRadio/> See live demo
                    </button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 sm:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 3</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <button className="flex items-center gap-2 px-7 py-3 mt-8 bg-blue-600 rounded-lg hover:bg-blue-800 duration-300">
                        <LuRadio/>See live demo
                    </button>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide className="text-white flex justify-between gap-10 md2:flex-wrap sm:justify-center">
            <img src={Image} alt="..." className="max-w-[100%] w-[380px] md2:w-[100%] sm:h-[300px] h-[400px] object-cover border-white border-x-2 border-y-2"/>
            <div className="my-auto max-w-[100%] w-[55%] h-[100%] flex-shrink-1 sm:w-[100%]">
                <h3 className="text-blue-600 text-2xl font-bold mb-5">Project 4</h3>
                <p className="text-md md:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
                    saepe unde, maxime obcaecati ipsum debitis dignissimos velit, 
                    dolorum dolorem quibusdam esse eius nihil corrupti tempore ea 
                    in aut voluptates pariatur!
                </p>
                <a href="#">
                    <button className="flex items-center gap-2 px-7 py-3 mt-8 bg-blue-600 rounded-lg hover:bg-blue-800 duration-300">
                        <LuRadio/> See live demo
                    </button>
                </a>
            </div>
        </SwiperSlide>

      </Swiper>
    );
};

export default Projects