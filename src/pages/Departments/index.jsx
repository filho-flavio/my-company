import React, { useState } from "react";
import "./index.css";
import Department from "../../components/Departments/Departments";
import marketingBg from "../../../public/marketing-bg.png";
import bod from "../../../public/bod.png"
import itDep from "../../../public/it-dep.jpg";
import { GoPlusCircle } from "react-icons/go";

export default function Departments() {
    // document.addEventListener('mousemove', (e) => {
    //     const cursor = document.querySelector('.circle');
    //     cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    // });

    const [isOpen, setIsOpen] = useState(false);

    const handleDepartments = () => {
        setIsOpen(!isOpen);
        document.querySelector(".btn-addDepartment").classList.add("hidden");
    }

    return (
        <>
            <div className="container-departments">
                <div className="departments line">
                    <div className="header line">
                        <h1 className="title">Department Management</h1>
                    </div>
                    <div className="departments-list line">
                        <Department imgSrc={marketingBg} />
                        <Department imgSrc={bod} />
                        <Department imgSrc={itDep} />
                        <Department imgSrc={marketingBg} />
                        <Department imgSrc={bod} />
                        <Department imgSrc={itDep} />
                    </div>
                </div>
            </div>
        </>
    )
}