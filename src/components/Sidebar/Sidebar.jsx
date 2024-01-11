import React from "react";
import { Navigate, Link } from "react-router-dom";
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <>
            <div className="container-sidebar">
                <div className="content-sidebar">
                    <div className="close-sidebar">
                        <button></button>
                    </div>
                    <div className="options-sidebar">
                        <ul className="itens-sidebar">
                            <li className="item-sidebar">
                                <Link to={'/home'}>Home</Link>
                            </li>
                            <li className="item-sidebar">
                                <Link to={'/departments'}>Departments</Link>
                            </li>
                            <li className="item-sidebar">
                                <Link to={'/users'}>Users</Link>
                            </li>
                            <li className="item-sidebar">
                                <Link to={'/calendar'}>Calendar</Link>
                            </li>
                            <li className="item-sidebar">
                                <Link to={'/statistics'}>Statistics</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}