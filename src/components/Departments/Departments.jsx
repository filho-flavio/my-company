import React from "react";
import "./Departments.css";

export default function Department({imgSrc}) {
    return (
        <>
            <div className="c-department">
                <div className="c-header-department">
                    <img src={imgSrc} className="img-header" alt="" />
                </div>
                <div className="c-btns-department">
                    <button className="btns-department pointer">See employees</button>
                    <button className="btns-department pointer">See orders</button>
                    <button className="btns-department pointer">Open a order</button>
                </div>
            </div>
        </>
    )
}