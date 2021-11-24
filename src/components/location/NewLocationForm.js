import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import { LocationContext } from "./LocationProvider"



export const NewLocation = () => {
    const { addLocations } = useContext(LocationContext)
    const [location, setlocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()

    const addlocationstate = (event) => {
        const copy = {...location}
        copy[event.target.id] = event.target.value
        setlocation(copy)
    }

    const savelocation = ()=>{
        addLocations(location)
        .then(history.push("/locations"))
    }

    return (
        <>
            <form className="locationForm">
                <h2 className="locationForm__title">New Location</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Location name:</label>
                        <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name"
                            onChange={addlocationstate} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Location address:</label>
                        <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address"
                            onChange={addlocationstate} />
                    </div>
                </fieldset>
            </form>
            <button className="btn btn-primary" onClick={savelocation}>Add Location</button>
        </>)
}