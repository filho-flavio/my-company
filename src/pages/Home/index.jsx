import React from "react";
import "./index.css"
import { Sidebar } from "../../components/Sidebar/Sidebar"

export const Home = () => {
    return (
        <>
            <div className="home">
                <Sidebar />
            </div>
        </>
    )
}