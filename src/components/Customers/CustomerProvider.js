import React, { createContext, useState } from "react";

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () =>{
        return fetch("http://localhost:8088/customers")
        .then(res=>res.json())
        .then((customers)=> setCustomers(customers))
    }

    const addCustomers = (customerObj) => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    return (
        <>
        <CustomerContext.Provider value={{customers, getCustomers, addCustomers}}>
            {props.children}
        </CustomerContext.Provider>
        </>
    )

}