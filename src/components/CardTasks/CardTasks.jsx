import React from "react";
import "./CardTasks.css";
import { MdOutlineLock } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import profileImage from "../../../public/profile.png"

export default function CardTasks() {
    return (
        <>
            <div className="container-cardtasks">

                <div className="header-cardtasks">
                    <img className="profile-img" src={profileImage} alt="Profile image" />
                    <div className="header-right">
                        <div className="title-cardstasks">
                            <h3>My Priorities</h3>
                            <MdOutlineLock />
                        </div>
                        <ul className="links-cardtasks">
                            <li>Upcoming</li>
                            <li>Overdue</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                </div>

                <div className="list-cardtasks">
                    <GoPlusCircle />
                    <p>Click here to add a task</p>
                </div>

            </div>
        </>
    )
}