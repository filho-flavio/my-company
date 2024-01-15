import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { IoClose, IoExitOutline, IoMenu, IoPodium, IoPeopleSharp, IoCalendarOutline, IoAnalytics, IoHome } from "react-icons/io5";
import "./Sidebar.css"

export const OpenSidebar = ({openSidebar}) => {
    return (
        <>
            <div className="menu-sidebar">
                <IoMenu id="btn-open-sidebar" onClick={openSidebar} className="menu-icon" />
            </div>
        </>
    )
}

export const Sidebar = ({closeSidebar}) => {
    const { signout } = useAuth();

    return (
        <>
            <div className="container-sidebar">
                <div className="content-sidebar">

                    <div className="close-sidebar">
                        <IoClose id="btn-close-sidebar" onClick={closeSidebar} className="btn-close" />
                        <h1 className="title-sidebar">My Company</h1>
                    </div>

                    <div className="options-sidebar">
                        <ul className="itens-sidebar">
                            <li className="item-sidebar">
                                <IoHome />
                                <Link className="links-sidebar" to={'/home'}>Home</Link>
                            </li>
                            <li className="item-sidebar">
                                <IoPodium />
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