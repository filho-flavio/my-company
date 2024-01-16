import React from "react";
import { IoClose, IoCreateOutline } from "react-icons/io5";
import "./Tasks.css"

export const Tasks = ({ text, key, deleteTask }) => {
    return (
        <>
            <div className="container-task" key={key} id={key}>
                <div className="content-task">
                    <p className="text-task">{text}</p>

                    <div className="btns">
                        <IoCreateOutline className="edit-task btn-task" />
                        <IoClose onClick={() => deleteTask(key)} className="delete-task btn-task" />
                    </div>
                </div>
            </div>
        </>
    )
}