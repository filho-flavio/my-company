import React from "react";
import "./index.css"

export const Users = () => {
    return (
        <>
            <div className="container-employees">

                <div className="header-employees line">

                    <h2 className="title-employees line">Employees Management</h2>

                    <div>

                        <div>
                            <label for="inShow">Show
                                <input type="number" name="inShow" id="inShow" min="10" max="20" value="10" />
                                entries
                            </label>
                        </div>

                        <div>
                            <label for="inSearch">Search:</label>
                            <input type="text" id="inSearch" />
                        </div>

                    </div>

                </div>

                <div className="table-employees">
                    <table
                        class="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Phone Number</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">R1C1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                            </tr>
                            <tr class="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}