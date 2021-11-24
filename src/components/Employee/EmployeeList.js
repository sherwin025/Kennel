import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";


export const EmployeeLists = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <section className="employees">
            <button onClick={
                ()=>{
                    history.push("./employees/hire")
                }
            } >Hire Employee</button>
            {
                employees.map(employee =>{
                    return (
                        <div className="employee" key={`employee--${employee.id}`}><Link to={`/employee/detail/${employee.id}`}>
                        {employee.name}
                    </Link></div>
                    )
                })
            }
        </section>
    )

}