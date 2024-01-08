import "./Input.css"
import React from "react"

export function Input ({type, value, textPlaceholder, onChange}){
    return(
        <>
            <input className="c-input" value={value} type={type} placeholder={textPlaceholder} onChange={onChange} />
        </>
    )
}