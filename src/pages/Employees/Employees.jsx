import React from "react";
import "./Employees.css";

export default function Employees({ idDept }) {
    const department = JSON.parse(localStorage.getItem("departments_db"));
    const filteredDepartment = department.find((item) => item.id === idDept);

    return (
        <>
            <div className="container-employees">
                <h2>Employee List - Department: {filteredDepartment.name}</h2>
                <div className="header">

                </div>
                <table>
                    <thead>

                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}