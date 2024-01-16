import React from "react";
import "./CardGoals.css";
import { IoAddOutline } from "react-icons/io5";

export const CardGoals = () => {
    return (
        <>
            <div className="container-goals">
                <div className="header-goals line">
                    <h1>My goals</h1>
                    <div className="add-goals">
                        <IoAddOutline className="btnAdd-goal" />
                        <b>Add goal</b>
                    </div>
                </div>
                <ul className="list-goals">

                </ul>
            </div>
        </>
    )
}