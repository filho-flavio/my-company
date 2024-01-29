import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Department from "../../components/Departments/Departments";
import marketingBg from "../../../public/marketing-bg.png";
import bod from "../../../public/bod.png"
import itDep from "../../../public/it-dep.jpg";
import { GoPlusCircle } from "react-icons/go";

export default function Departments() {

    const arrDepartments = [
        {
            id: 1,
            name: 'Marketing',
            linkEmployees: "marketing"
        },
        {
            id: 2,
            name: "TI Department",
            linkEmployees: "ti"
        },
        {
            id: 3,
            name: "Accouting",
            linkEmployees: "accounting"
        },
        {
            id: 4,
            name: "Comex",
            linkEmployees: "comex"
        },
        {
            id: 5,
            name: "Board of Director",
            linkEmployees: "bod"
        },
        {
            id: 6,
            name: "HR",
            linkEmployees: "hr"
        },
        {
            id: 7,
            name: "Financial",
            linkEmployees: "financial"
        }
    ]

    // localStorage.setItem("departments_db",  JSON.stringify(arrDepartments));

    function seeEmployees(department) {

    }

    return (
        <div className="container-departments">

            <div className="header-departments">
                <h1 className="title">Department Management</h1>
            </div>

            <div className="departments-list">
                {arrDepartments.map((item) => (
                    <Department key={item.id} titleDepartment={item.name} linkEmployees={item.linkEmployees} seeEmployees={seeEmployees} />
                ))}
            </div>

        </div>
    )
}