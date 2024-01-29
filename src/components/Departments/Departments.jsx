import React from "react";
import "./Departments.css";
import { Link } from "react-router-dom";

export default function Department({ titleDepartment, key }) {
    return (
        <>
            <div className="c-department" key={key}>
                <h2 className="c-title-department">{titleDepartment}</h2>

                <div className="c-btns-department">
                    <Link className="btns-department pointer" idDept={key} to={`/departments/employees`}>See employees</Link>
                    <button className="btns-department pointer">See orders</button>
                    <button className="btns-department pointer">Open a order</button>
                </div>
            </div>
        </>
    )
}