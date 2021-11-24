import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const HireForm = () => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    const [employee, hireemployee] = useState({
        name: "",
        locationId: 1
    })

    useEffect(() => {
        getLocations()
    }, [])

    const hireEmployeestate = (event) => {
        const copy = { ...employee }
        copy[event.target.id] = event.target.value
        hireemployee(copy)
    }

    const saveNewEmployee = () => {
        const employee1 = {
            name: employee.name,
            locationId: parseInt(employee.locationId)
        }

        addEmployees(employee1)
            .then(history.push("/employees"))
    }


    return (<>
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name"
                        onChange={hireEmployeestate} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control"
                        onChange={hireEmployeestate}>
                        <option value="0">Select a location</option>
                        {
                            locations.map(l =>
                                <option value={l.id} key={l.id} id={l.id}>{l.name}</option>
                            )
                        }
                    </select>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={saveNewEmployee}>
                Save Employee
            </button>
        </form>
    </>)
}
