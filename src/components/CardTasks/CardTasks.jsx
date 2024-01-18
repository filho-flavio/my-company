import React, { useState, useEffect } from "react";
import "./CardTasks.css";
import { MdOutlineLock } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import profileImage from "../../../public/profile.png";
import { Tasks } from "../Tasks/Tasks";
import { v4 as uuidv4 } from 'uuid'

export default function CardTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let tasksRecupered = JSON.parse(localStorage.getItem("tasks_db"));
        let tasksLocalStorage = tasksRecupered ? tasksRecupered : [];

        setTasks(tasksLocalStorage);
    }, [])

    const addTask = () => {
        const text = document.querySelector("#input-tasks");
        const textInput = text.value;

        if (textInput === "") {
            return alert("Task must be completed!")
        }

        let task = {
            id: uuidv4(),
            text: textInput,
            completed: false
        }

        setTasks(prevState => [...prevState, task]);
        localStorage.setItem("tasks_db", JSON.stringify(tasks));
        text.value = "";
    }

    const deleteTask = (taskId) => {
        let updatedTasks = [];

        if (window.confirm("Are you sure to delete this task: ")) {
            return updatedTasks = tasks.filter((task) => task.id !== taskId);
        }

        localStorage.setItem("tasks_db", JSON.stringify(updatedTasks))
    }

    const inputActive = () => {
        document.querySelector(".btn-addTask").classList.remove("hidden")
    }

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
                        {/* <ul className="links-cardtasks">
                            <li className="status-tasks" onClick={linkClicked}>Upcoming</li>
                            <li className="status-tasks">Overdue</li>
                            <li className="status-tasks">Completed</li>
                        </ul> */}
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