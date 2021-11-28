import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { LocationContext } from "./LocationProvider"



export const NewLocation = () => {
    const { addLocations, updateLocation, getLocationById } = useContext(LocationContext)
    const [location, setlocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()
    const {locationId} = useParams()

    const addlocationstate = (event) => {
        const copy = {...location}
        copy[event.target.id] = event.target.value
        setlocation(copy)
    }

    useEffect(
        ()=>{
        getLocationById(locationId).then(setlocation)
        }, [locationId]
    )
    const savelocation = ()=>{
        if(locationId){
            updateLocation(location)
            .then(history.push("/locations"))
        }else {
            addLocations(location)
            .then(history.push("/locations"))
        }
    }

    return (
        <>
            <form className="locationForm">
                <h2 className="locationForm__title">{locationId? <>Edit Location Information</>: <>New Location</>}</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Location name:</label>
                        <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name"
                            onChange={addlocationstate} defaultValue= {location.name}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Location address:</label>
                        <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address"
                            onChange={addlocationstate} defaultValue= {location.address} />
                    </div>
                </fieldset>
            </form>
            <button className="btn btn-primary" onClick={savelocation}>{locationId? <>Save Edits</> : <>Add Location</>}</button>
        </>)
}