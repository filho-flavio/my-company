import React from "react";
import "./CardTasks.css";
import { MdOutlineLock } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import profileImage from "../../../public/profile.png";
import { Tasks } from "../Tasks/Tasks";

const tasks = JSON.parse(localStorage.getItem("tasks_db"));
export default function CardTasks({ addTask, inputActive, deleteTask }) {

    // const inputBlur = () => {
    //     const btnAddTask = document.querySelector("#btn-addTask");
    //     const input = document.querySelector("#input-tasks");
    //     input.addEventListener("blur", () => {
    //         btnAddTask.classList.add("hidden");
    //     });
    // }

    // inputBlur();

    const linkClicked = () => {
        const li = document.querySelectorAll(".status-tasks");
        li.forEach(item => {
            item.addEventListener("click", item.classList.toggle("active"))
        })
    }


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
                            <li className="status-tasks" onClick={linkClicked}>Upcoming</li>
                            <li className="status-tasks">Overdue</li>
                            <li className="status-tasks">Completed</li>
                        </ul>
                    </div>
                </div>

                <div className="list-cardtasks">
                    <GoPlusCircle />
                    <input className="input-tasks" id="input-tasks" onClick={inputActive} type="text" placeholder={"Click here to add a task"} />
                    <button id="btn-addTask" className="btn-addTask hidden" onClick={addTask} >Add</button>
                </div>

                <div className="tasks-cardtasks">
                    {tasks.map((item) =>
                        <Tasks
                            key={item.id}
                            text={item.text}
                            deleteTask={deleteTask}
                        />
                    )}
                </div>

            </div>
        </>
    )
}