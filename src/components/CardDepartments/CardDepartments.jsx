import React from "react";
import "./CardDepartments.css";
import Department from "../Departments/Departments"

export default function CardDepartments() {
    const departments = JSON.parse(localStorage.getItem("departments_db"));

    return (
        <>
            <div className="container-card-departments">
                <div className="content-card-gallery">
                    {departments.map((item) => (
                        <Department titleDepartment={item.name} key={item.key} />
                    ))}
                </div>
            </div>
        </>
    )
}