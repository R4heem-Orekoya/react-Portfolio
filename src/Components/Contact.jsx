import React from "react";
import {BsSend} from 'react-icons/bs'

const Contact = () =>{
    return(
        <section className="text-white" id="contact">
            <div className="max-w-[1000px] w-[90%] mx-auto py-[100px]">
                <h2 className="text-5xl font-extrabold lg:text-4xl md:text-3xl"><span className="text-blue-600">03</span>. Contact me</h2>
                <form action="#" className="max-w-[500px] w-[90%] mx-auto mt-12 flex-col justify-center gap-4">
                    <input className="w-[100%] h-[60px] md:h-[50px] border-none outline-none mb-4 px-3 bg-transparent ring-1 ring-blue-600 rounded-md" type="text" placeholder="Your name"/>
                    <input className="w-[100%] h-[60px] md:h-[50px] border-none outline-none mb-4 px-3 bg-transparent ring-1 ring-blue-600 rounded-md" type="email" placeholder="Your email"/>
                    <textarea className="w-[100%] min-h-[120px] max-h-[300px] h-[120px] border-none outline-none mb-4 p-3 bg-transparent ring-1 ring-blue-600 rounded-md" placeholder="Your message..."></textarea>
                    <button className="px-7 py-3 bg-blue-600 flex gap-1 items-center rounded-lg hover:bg-blue-800 duration-300"type="submit">
                        <BsSend/> Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact