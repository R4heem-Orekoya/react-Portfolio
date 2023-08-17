import React from "react";
import homeImage from  './3d3.jpg'
import { BsFillChatDotsFill } from 'react-icons/bs'



function Hero(){
    return(
        <div className="hero max-w-[1000px] w-[90%] flex items-center mx-auto pt-[3rem] md:pt[5rem] pb-10 text-white">
            <div className="w-[100%] h-[100%] text-center">
                <img src={homeImage} alt="image" className="w-[300px] md:w-[230px] aspect-square rounded-full object-cover mx-auto"/>
                <h2 className="my-4 text-2xl font-bold sm:text-[18px]">Hi, i'm <span className="text-blue-600 font-extrabold">Raheem</span> Orekoya.</h2>
                <p className="text-4xl font-extrabold lg:text-3xl md:text-2xl sm:text-xl">Frontend Developer & Web Designer✌️</p>
                <p className="text-lg mt-5 mb-10">I design and develop beautiful, responsive and modern websites. Need a website?</p>
                <a href="#">
                    <button className=" flex gap-2 items-center px-7 py-3 rounded-lg mx-auto bg-blue-600 mt-4 hover:bg-blue-700 duration-300">
                        Let's Talk <BsFillChatDotsFill size={20}/>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Hero