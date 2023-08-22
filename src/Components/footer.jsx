import React from "react";
import{FaInstagram, FaTwitter, FaTiktok, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className="text-white pb-8">
            <div className="w-[90%] max-w-[1000px] mx-auto flex justify-between flex-wrap gap-8 items-center text-center">
                <div>
                    <p className="text-xl md:text-sm">All rights reserved © 2023</p>
                </div>

                <div className="flex gap-4">
                    <a href="#">
                        <FaInstagram size={25} className="hover:text-blue-600 duration-300"/>
                    </a>
                    <a href="#">
                        <FaTwitter size={25} className="hover:text-blue-600 duration-300"/>
                    </a>
                    <a href="#">
                        <FaTiktok size={25} className="hover:text-blue-600 duration-300"/>
                    </a>
                    <a href="#">
                        <FaGithub size={25} className="hover:text-blue-600 duration-300"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer