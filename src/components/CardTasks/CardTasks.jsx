import React, { useState, useEffect } from "react";
import "./CardTasks.css";
import { MdOutlineLock } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import profileImage from "../../../public/profile.png";
import { Tasks } from "../Tasks/Tasks";
import { v4 as uuidv4 } from 'uuid'

export default function CardTasks() {
    const [tasks, setTasks] = useState([]);
    const [inputIsClicked, setInputIsClicked] = useState(false);

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
        // document.querySelector(".btn-addTask").classList.remove("hidden")
        setInputIsClicked(!inputIsClicked);
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
                    <GoPlusCircle className="pointer" />
                    <input className="input-tasks" id="input-tasks" onClick={inputActive} type="text" placeholder={"Click here to add a task"} />
                    {inputIsClicked ? (
                            <button id="btn-addTask" className="btn-addTask" onClick={addTask} >Add</button>
                        ) : (
                            <div></div>
                        )}
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