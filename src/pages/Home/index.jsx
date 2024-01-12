import React from "react";
import "./index.css"
import { OpenSidebar, Sidebar } from "../../components/Sidebar/Sidebar";
import CardTasks from "../../components/CardTasks/CardTasks";

export const Home = () => {
    const openSidebar = () => {
        const btOpen = document.querySelector("#btn-open-sidebar");

        btOpen.addEventListener("click", () => {
            document.querySelector(".content-home-menu").classList.toggle("hidden");
            document.querySelector(".content-home-sidebar").classList.toggle("hidden");
        })
    }

    const closeSidebar = () => {
        const btClose = document.querySelector("#btn-close-sidebar");

        btClose.addEventListener("click", () => {
            document.querySelector(".content-home-sidebar").classList.toggle("hidden");
            document.querySelector(".content-home-menu").classList.toggle("hidden");
        })
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

                <div className="main-home">

                    <div className="header-home">
                        <h2 className="title-pages">Home</h2>
                    </div>

                    <div className="content-home-manage">
                        <CardTasks />
                        <CardTasks />
                    </div>

                </div>
            </div>
        </>
    )
}