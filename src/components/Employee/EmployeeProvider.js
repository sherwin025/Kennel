import React, { createContext, useState } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () =>{
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res=>res.json())
        .then((employees)=> setEmployees(employees))
    }

    const addEmployees = (employeeObj) => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    const getEmployeeById = id => {
        const theId = parseInt(id)
        return fetch(`http://localhost:8088/employees/${theId}`)
                .then(res => res.json())
    }

    return (
        <>
        <EmployeeContext.Provider value={{employees, getEmployees, addEmployees, updateEmployee, getEmployeeById}}>
            {props.children}
        </EmployeeContext.Provider>
        </>
    )

}