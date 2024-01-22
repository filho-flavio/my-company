import React from "react";
import "./CardDepartments.css"

export default function CardDepartments() {
    const departments = JSON.parse(localStorage.getItem("departments_db"));

    return (
        <>
            <div className="container-card-departments line">
                <div className="content-card-departments">
                    
                </div>
            </div>
        </>
    )
}