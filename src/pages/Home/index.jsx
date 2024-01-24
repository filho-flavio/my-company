import React from "react";
import "./index.css";
import CardTasks from "../../components/CardTasks/CardTasks";
import { CardGoals } from "../../components/CardGoals/CardGoals";
import CardDepartments from "../../components/CardDepartments/CardDepartments";

export const Home = () => {

    return (
        <>
            <div className="container-home">
                <div className="content-home">
                    <CardTasks />
                    <CardGoals />
                    <CardDepartments />
                </div>
            </div>
        </>
    )
}