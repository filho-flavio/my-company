import React from "react";
import { IoClose, IoCreateOutline } from "react-icons/io5";
import "./Tasks.css"

export const Tasks = () => {
    return (
        <>
            <div className="container-task line">
                <div className="content-task">
                    <p>My first task</p>
                    <IoCreateOutline />
                    <IoClose />
                </div>
            </div>
        </>
    )
}