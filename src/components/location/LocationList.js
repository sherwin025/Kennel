import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AnimalContext } from "../animals/AnimalProvider";
import { EmployeeContext } from "../Employee/EmployeeProvider";
import { LocationContext } from "./LocationProvider";
import { Link } from "react-router-dom";

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    const history = useHistory()

    useEffect(() => {
        getLocations().then(getEmployees).then(getAnimals)
    }, [])

    return (
        <section className="locations">
            <button onClick={
                () => {
                    history.push("./locations/newlocation")
                }
            }>Open New Location</button>

            {
                locations.map(location => {
                    let matchedEmployees = employees.filter(employee=>employee.locationId === location.id) || 0
                    let matchedAnimals = animals.filter(animal=>animal.locationId === location.id) || 0

                    return (
                        <div className="location" key={`location--${location.id}`}>
                            <div className="location_name"><Link to={`/locations/detail/${location.id}`}>
                                Name: {location.name}
                            </Link></div>
                            <div className="numberofemployees">
                                Employees: {matchedEmployees.length}
                            </div>
                            <div className="numberofanimals">
                                Animals: {matchedAnimals.length}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )

}