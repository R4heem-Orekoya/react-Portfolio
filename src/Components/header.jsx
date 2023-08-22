import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

function Header(){
    const [active, setActive] = useState(false);

    const changeActive = ()=>{
        setActive(!active)
    }
    window.addEventListener('scroll', ()=>{
        if(active){
            setActive(!active)
        }
    })

    const style = {color: 'white', fontSize: "1.5rem",}
    return(
        <header className="sticky top-0 w-full h-[80px] bg-black flex z-40">
            <nav className="max-w-[1000px] w-[90%] flex justify-between items-center mx-auto">
                <h2 href="#" className="text-white font-bold text-xl bg-blue-600 px-3 py-1 rounded-md cursor-pointer">
                    R
                </h2>

                <ul className={!active? "flex gap-8 md:fixed md:top-[80px] md:flex-col md:right-[-100%] md:bg-[#121212] md:w-full md:gap-4 md:p-[5%] md:border-b-[0.5px] md:border-t-[0.5px] md:border-gray-700  duration-500 ease-in-out z-40": "flex gap-8 md:fixed md:top-[80px] md:flex-col md:right-[0] md:bg-[#121212] md:w-full md:gap-4 md:p-[5%] md:border-b-[0.5px] md:border-t-[0.5px] md:border-gray-700 duration-500 ease-in-out z-40"}>
                    <li className="text-white text-md transition duration-300 ease hover:text-blue-600 md:text-sm"><a href="#">Home</a></li>
                    <li className="text-white text-md transition duration-300 ease hover:text-blue-600 md:text-sm"><a href="#about">About</a></li>
                    <li className="text-white text-md transition duration-300 ease hover:text-blue-600 md:text-sm"><a href="#projects">Projects</a></li>
                    <li className="text-white text-md transition duration-300 ease hover:text-blue-600 md:text-sm"><a href="#contact">Contact</a></li>
                </ul>

                <div className="hidden cursor-pointer md:block" onClick={changeActive}>
                    {!active? <FaBars style={style}/>: <CgClose style={style}/>}
                </div>
            </nav>
        </header>
    )
}

export default Header