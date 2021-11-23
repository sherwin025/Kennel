import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";


export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <section className="locations">
            {
                locations.map(location =>{
                    return (
                        <div className="location" key={`location--${location.id}`}>
                            <div className="location_name">
                                Name: {location.name}
                            </div>
                            <div className="location_address">
                                Location: {location.address}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )

}