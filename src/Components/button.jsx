import React from "react";
import {LuRadio} from 'react-icons/lu'

const Button = (props) => {
    return(
        <button className="flex items-center gap-2 px-7 py-3 mt-5 bg-blue-600 rounded-lg hover:bg-blue-800 duration-300">
            {props.children}
        </button>
    )
}

export default Button