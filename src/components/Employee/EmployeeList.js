import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";


export const EmployeeLists = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <section className="employees">
            {
                employees.map(employee =>{
                    return (
                        <div className="employee" key={`employee--${employee.id}`}>
                            <div className="employee_name">
                                Name: {employee.name}
                            </div>
                            <div className="employee_address">
                                Location: {employee.location.name}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )

}