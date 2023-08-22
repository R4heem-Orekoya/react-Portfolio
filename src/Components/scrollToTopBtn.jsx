import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisiblity = () => {
        const scrolled = document.documentElement.scrollTop;
        
        scrolled > 600 ? setVisible(true): setVisible(false);
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    document.addEventListener('scroll', toggleVisiblity);


    return(
        <button onClick={scrollToTop} className={visible === false?"fixed bottom-[-100%] right-[5%] text-white bg-gray-900 p-2 rounded-full duration-500": "fixed bottom-[10%] right-[5%] text-white bg-gray-900 p-2 rounded-full active:scale-90 z-40 duration-500"}>
            <IoIosArrowUp size={25}/>
        </button>
    )
}

export default ScrollToTop