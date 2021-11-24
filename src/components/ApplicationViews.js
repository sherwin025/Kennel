import React from "react"
import { Route } from "react-router-dom"
import { AnimalList } from "./animals/AnimalList"
import { AnimalProvider } from "./animals/AnimalProvider"
import { CustomerList } from "./Customers/CustomerList"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { EmployeeLists } from "./Employee/EmployeeList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animals/AnimalForm"
import { HireForm } from "./Employee/EmployeeForm"
import { AnimalDetail } from "./animals/AnimalDetail"
import { NewLocation } from "./location/NewLocationForm"
import { EmployeeDetail } from "./Employee/EmployeeDetail"
import { LocationDetails } from "./location/LocationDetails"



export const ApplicationViews = () => {
    return (
        <>


            <AnimalProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <CustomerProvider>
                            <Route exact path="/locations">
                                <LocationList />
                            </Route>
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>
                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route exact path="/customers">
                                <CustomerList />
                            </Route>
                            <Route exact path="/employees">
                                <EmployeeLists />
                            </Route>
                            <Route exact path="/employees/hire">
                                <HireForm />
                            </Route>
                            <Route exact path="/locations/newlocation">
                                <NewLocation />
                            </Route>
                            <Route exact path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>
                            <Route exact path="/employee/detail/:employeeId(\d+)">
                                <EmployeeDetail />
                            </Route>
                            <Route exact path="/locations/detail/:locationId(\d+)">
                                <LocationDetails />
                            </Route>
                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>

                        </CustomerProvider>
                    </LocationProvider>
                </EmployeeProvider>
            </AnimalProvider>
        </>
    )
}
