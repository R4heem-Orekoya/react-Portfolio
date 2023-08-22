import React from "react";
import {BsSend} from 'react-icons/bs'
import Button from "./button";
import Heading from "./sectionHeading";
import Span from "./sectionHeadingSpan";




const Contact = () =>{
    return(
        <section className="text-white" id="contact">
            <div className="max-w-[1000px] w-[90%] mx-auto py-[100px]">
                <Heading>
                   <Span>03</Span>. Contact me
                </Heading>
                <form action="#" className="max-w-[500px] w-[90%] mx-auto mt-12 flex-col justify-center gap-4">
                    <input className="w-[100%] h-[60px] md:h-[50px] border-none outline-none mb-4 px-3 bg-transparent ring-1 ring-blue-600 rounded-md" type="text" placeholder="Your name"/>
                    <input className="w-[100%] h-[60px] md:h-[50px] border-none outline-none mb-4 px-3 bg-transparent ring-1 ring-blue-600 rounded-md" type="email" placeholder="Your email"/>
                    <textarea className="w-[100%] min-h-[120px] max-h-[300px] h-[120px] border-none outline-none p-3 bg-transparent ring-1 ring-blue-600 rounded-md" placeholder="Your message..."></textarea>
                    <Button type="submit">
                        <BsSend/> Send
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact