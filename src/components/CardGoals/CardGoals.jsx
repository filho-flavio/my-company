import React, { useState } from "react";
import "./CardGoals.css";
import { IoAddOutline } from "react-icons/io5";
import { Goal } from "../Goals/Goals";

export const CardGoals = () => {
    const [isGoalOpen, setIsGoalOpen] = useState(false);

    const addGoal = () => {
        setIsGoalOpen(!isGoalOpen);
    }

    const departments = JSON.parse(localStorage.getItem("departments_db"));

    return (
        <>
            <div className="container-goals">
                <div className="header-goals line">
                    <h1>My goals</h1>
                    <div className="add-goals" onClick={addGoal}>
                        <IoAddOutline className="btnAdd-goal" />
                        <b>Add goal</b>
                    </div>
                </div>
                <div className="create-goal">
                    {isGoalOpen ? (
                        <div className="">
                            <div className="content-addgoal">
                                <input type="text" placeholder="Enter your goal here..." />
                                <select name="" id="">
                                    <option value="">Select your department</option>
                                    <option value="">opt</option>

                                    {/* {
                                    departments.map((item) => {
                                        return (<option value="">{item.name}</option>)
                                    })
                                } */}
                                </select>
                            </div>

                            <div>
                                <select name="Status" id="status-goal">
                                    <option value="" disabled>Status</option>
                                    <option value="">On track</option>
                                    <option value="">Off track</option>
                                </select>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <ul className="list-goals">
                    {/* {CardGoals.map(() =>) {
                        <Goal
                        
                        />
                    }} */}
                    <Goal />
                    <Goal />
                </ul>
            </div>
        </>
    )
}