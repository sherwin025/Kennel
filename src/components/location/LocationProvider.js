import React, { createContext, useState } from "react";

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () =>{
        return fetch("http://localhost:8088/locations?")
        .then(res=>res.json())
        .then((locations)=> setLocations(locations))
    }

    const addLocations = (locationObj) => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const updateLocation = location => {
        return fetch(`http://localhost:8088/locations/${location.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
    }

    const getLocationById = id => {
        const theId = parseInt(id)
        return fetch(`http://localhost:8088/locations/${theId}`)
                .then(res => res.json())
    }

    return (
        <>
        <LocationContext.Provider value={{locations, getLocations, addLocations, updateLocation, getLocationById}}>
            {props.children}
        </LocationContext.Provider>
        </>
    )

}