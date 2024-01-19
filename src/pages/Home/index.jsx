import React from "react";
import "./index.css";
import CardTasks from "../../components/CardTasks/CardTasks";
import { CardGoals } from "../../components/CardGoals/CardGoals";
import CardDepartments from "../../components/CardDepartments/CardDepartments";

export const Home = () => {
    return (
        <>
            <div className="container-home">
                <div className="main-home line">
                    <div className="content-home-manage">
                        <CardTasks />
                        <CardGoals />
                    </div>

                    <div className="content-home-departments">
                    <CardDepartments />
                    </div>
                </div>
            </div>
        </>
    )
}