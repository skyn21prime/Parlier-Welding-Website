
import style from "./HoverinLink.less"
import React from "react"

function A(props){

    // if href exsits, set to href. else, set to text
    let redirect = props.href ? props.href : props.text
    let timeout = 5

    let aa = <a href={redirect} className=" text-cyan-500 font-medium glowOption">
        {props.text}
    </a>;

    return aa
}

export default A
