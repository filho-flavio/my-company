import "./Button.css"
import React from "react"

export function Button({text, onClick}){
    return(
        <>  
            <button className="c-button" onClick={onClick}>{text}</button>
        </>
    )
}