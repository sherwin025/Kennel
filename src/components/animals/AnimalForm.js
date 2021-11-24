import React, { useContext, useEffect, useState } from "react"

import { useHistory, useParams } from 'react-router-dom';
import { CustomerContext } from "../Customers/CustomerProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "./AnimalProvider";

export const AnimalForm = () => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    const history = useHistory();
    const { animalId } = useParams()

    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        newAnimal[event.target.id] = event.target.value
        setAnimal(newAnimal)
    }



    const handleClickSaveAnimal = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        const locationId = parseInt(animal.locationId)
        const customerId = parseInt(animal.customerId)
        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a location and a customer")
        } else {
            const newAnimal = {
                name: animal.name,
                breed: animal.breed,
                locationId: locationId,
                customerId: customerId
            }
            addAnimal(newAnimal)
                .then(() => history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" value={animal.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal breed:</label>
                    <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
                Save Animal
            </button>
        </form>
    )
}
