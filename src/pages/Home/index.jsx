import React, { useState } from "react";
import "./index.css"
import { OpenSidebar, Sidebar } from "../../components/Sidebar/Sidebar";
import CardTasks from "../../components/CardTasks/CardTasks";
import {v4 as uuidv4} from 'uuid';

export const Home = () => {
    const [tasks, setTasks] = useState([]);


    const openSidebar = () => {
        const btOpen = document.querySelector("#btn-open-sidebar");

        btOpen.addEventListener("click", toggleSidebar)
    }

    const closeSidebar = () => {
        const btClose = document.querySelector("#btn-close-sidebar");

        btClose.addEventListener("click", toggleSidebar)
    }

    const toggleSidebar = () => {
        document.querySelector(".content-home-sidebar").classList.toggle("hidden");
        document.querySelector(".content-home-menu").classList.toggle("hidden");
    }

    const addTask = () => {
        const text = document.querySelector("#input-tasks");
        const textInput = text.value;

        if (textInput === "") {
            return alert("Task must be completed!")
        }

        let task = {
            id: uuidv4(),
            text: textInput
        }

        setTasks(prevState => [...prevState, task]);
        text.value = "";

        console.log(tasks)
    }

    const inputActive = () => {
        document.querySelector(".btn-addTask").classList.remove("hidden")
    }

    return (
        <>
            <div className="container-home">

                <div className="content-home-sidebar hidden">
                    <Sidebar closeSidebar={closeSidebar} />
                </div>

                <div className="content-home-menu">
                    <OpenSidebar openSidebar={openSidebar} />
                </div>

                <div className="main-home line">
                    <div className="content-home-manage">
                        <CardTasks addTask={addTask} inputActive={inputActive} />
                        <CardTasks />
                    </div>

                    <div className="content-home-departments">

                    </div>
                </div>
            </div>
        </>
    )
}