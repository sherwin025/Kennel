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

    return (
        <>
        <EmployeeContext.Provider value={{employees, getEmployees, addEmployees}}>
            {props.children}
        </EmployeeContext.Provider>
        </>
    )

}