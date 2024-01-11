import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { IoClose, IoExitOutline, IoMenu, IoGrid, IoPeopleSharp, IoCalendarOutline, IoAnalytics, IoHome } from "react-icons/io5";
import "./Sidebar.css"

export const Sidebar = () => {
    const { signout } = useAuth();

    return (
        <>
            <div className="container-sidebar">
                <div className="content-sidebar">

                    <div className="close-sidebar">
                        <IoClose className="btn-close" />
                    </div>

                    <div className="options-sidebar">
                        <ul className="itens-sidebar">
                            <li className="item-sidebar">
                                <IoHome />
                                <Link className="links-sidebar" to={'/home'}>Home</Link>
                            </li>
                            <li className="item-sidebar">
                                <IoGrid />
                                <Link className="links-sidebar" to={'/departments'}>Departments</Link>
                            </li>
                            <li className="item-sidebar">
                                <IoPeopleSharp />
                                <Link className="links-sidebar" to={'/users'}>Users</Link>
                            </li>
                            <li className="item-sidebar">
                                <IoAnalytics />
                                <Link className="links-sidebar" to={'/statistics'}>Statistics</Link>
                            </li>
                            <li className="item-sidebar">
                                <IoCalendarOutline />
                                <Link className="links-sidebar" to={'/calendar'}>Calendar</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="log-out-sidebar">
                        <IoExitOutline className="btn-signout" onClick={signout} />
                    </div>

                </div>
            </div>
        </>
    )
}