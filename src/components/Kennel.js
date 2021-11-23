import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./Kennel.css"
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalList } from "./animals/AnimalList"
import { CustomerProvider } from "./Customers/CustomerProvider.js"
import { CustomerList } from "./Customers/CustomerList.js"
import { EmployeeProvider } from "./Employee/EmployeeProvider.js"
import { EmployeeLists } from "./Employee/EmployeeList.js"
import { LocationProvider } from "./location/LocationProvider.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
        <EmployeeProvider>
            <EmployeeLists />
        </EmployeeProvider>
    </>
)
