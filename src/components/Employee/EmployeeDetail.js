import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const {employees} = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({ location: {}})

        const history = useHistory()
    /*
        Given the example URL above, this will store the value
        of 5 in the employeeId variable
    */
    const { employeeId } = useParams();

    useEffect(() => {
        const theEmployee = employees.find(e => e.id === parseInt(employeeId)) || { location: {}}
        setEmployee(theEmployee)
    }, [employeeId])

    return (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { employee.location.name }</div>

        <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit Employee Info</button>
    </section>
    )
}
