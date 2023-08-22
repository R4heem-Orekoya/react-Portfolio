import React from "react";

const Heading = (props) => {
    return(
        <h2 className="text-5xl font-extrabold lg:text-4xl md:text-3xl">{props.children}</h2>
    )
}

export default Heading