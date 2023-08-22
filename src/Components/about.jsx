import React from "react";
import Image from '../assets/customer4.webp'
import { FaFileDownload} from 'react-icons/fa'
import Button from "./button";
import Heading from "./sectionHeading";
import Span from "./sectionHeadingSpan";


export default function About(){
    return(
        <section className="text-white" id="about">
            <div className="max-w-[1000px] w-[90%] mx-auto py-[100px]">
                <Heading>
                   <Span>01</Span>. About me
                </Heading>
                <div className="w-[100%] h-[100%] mt-12 flex flex-wrap items-center justify-center gap-10">
                    <img src={Image} alt="my photo" className="w-[400px] aspect-[9/11] object-cover max-w-[100%] flex-shrink-1"/>

                    <div className="w-[450px] flex-shrink md:max-w-[450px]">
                        <h3 className="text-4xl font-bold md:text-2xl">Raheem <span className="text-blue-600">Orekoya</span></h3>
                        <p className="text-justify text-lg mt-8 mb-8 md:text-[1rem]">
                            I am a skilled frontend web developer hailing from Nigeria, 
                            i blend coding and design to create captivating user 
                            interfaces. I am currently pursuing a computer science 
                            degree, my passion lies in crafting innovative digital 
                            experiences that merge technology and creativity. I aspire 
                            to revolutionize the web with my unique skill set.
                        </p>
                        <a href="#" >
                            <Button>
                                <FaFileDownload size={20}/> Download CV
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}