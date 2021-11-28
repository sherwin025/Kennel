import { useState } from "react"
import { useHistory, useParams } from "react-router"
import { useContext, useEffect } from "react/cjs/react.development"
import { AnimalContext } from "../animals/AnimalProvider"
import { EmployeeContext } from "../Employee/EmployeeProvider"
import { LocationContext } from "./LocationProvider"

export const LocationDetails = () => {
    const {locationId} = useParams()

    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    const [chosenlocationinfo, setchoselocationinfo] = useState({})
    const [chosenemployees, setchosenemployees] = useState([])
    const [chosenanimals, setchosenanimals] = useState([])
    const history = useHistory()

    useEffect(()=>{
        getLocations().then(getEmployees).then(getAnimals).then(()=>{filteredArrays()})
    }, [locationId])

    const filteredArrays = () =>{
        
        const matchedlocation = locations.find(each =>each.id === parseInt(locationId))
        const matchedemployees = employees.filter(each =>each.locationId === parseInt(locationId))
        const matchedAnimals = animals.filter(each =>each.locationId === parseInt(locationId))

        const copy = matchedlocation
        setchoselocationinfo(copy)

        const employeecopy = matchedemployees
        setchosenemployees(employeecopy)

        const animalscopy = matchedAnimals
        setchosenanimals(animalscopy)
    }

    return (
        <><div>
            <h1>{chosenlocationinfo.name}</h1>
            <p>{chosenlocationinfo.address}</p>
            <h2>Current Animals:</h2> 
            {
                chosenanimals.length > 0? chosenanimals.map(animal=><div>{animal.name}</div>): "Currently No Animals"
            }
            <h2>Current Employees:</h2>
            {
                chosenemployees.length > 0 ? chosenemployees.map(emp=><div>{emp.name}</div>) : "No Active Employees"
            }
        </div>
        
        <button onClick={() => {
                history.push(`/locations/edit/${chosenlocationinfo.id}`)
            }}>Edit location Info</button>
            </>
    )
} 