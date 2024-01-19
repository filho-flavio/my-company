import React, { useState } from "react";
import "./CardGoals.css";
import { IoAddOutline } from "react-icons/io5";
import { Goal } from "../Goals/Goals";
import { Input } from "../Input/Input"

export const CardGoals = () => {
    const [isGoalOpen, setIsGoalOpen] = useState(false);

    const addGoal = () => {
        setIsGoalOpen(!isGoalOpen);
    }

    const departments = JSON.parse(localStorage.getItem("departments_db"));

    return (
        <>
            <div className="container-goals">
                <div className="header-goals">
                    <h1>My goals</h1>
                    <div className="add-goals">
                        <span onClick={addGoal}>
                            <IoAddOutline className="btnAdd-goal" />
                            <b>Add goal</b>
                        </span>
                    </div>
                </div>
                {isGoalOpen ? (
                    <div className="modal-goal">
                        <div className="content-addgoal">
                            <input id="input-goal" className="bg-white" type="text" placeholder="Enter your goal here..." />
                        </div>

                        <div className="selects-goal">
                            <select name="" className="select departments-goal bg-white">
                                <option value="">Select your department</option>
                                <option value="">opt</option>

                                {/* {
                                    departments.map((item) => {
                                        return (<option value="">{item.name}</option>)
                                    })
                                } */}
                            </select>

                            <select name="" className="select status-goal bg-white">
                                <option value="">Status</option>
                                <option value="">On track</option>
                                <option value="">Off track</option>
                            </select>

                            <button id="btn-addGoal">Save</button>
                        </div>

                    </div>
                ) : (
                    <div></div>
                )}
                <ul className="list-goals">
                    {/* {CardGoals.map(() =>) {
                        <Goal
                        
                        />
                    }} */}
                    <li>
                        <Goal />
                    </li>
                    <li>
                        <Goal />
                    </li>
                </ul>
            </div>
        </>
    )
}