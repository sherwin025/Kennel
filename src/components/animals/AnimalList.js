import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"


export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

    const [filteredAnimals, setFiltered] = useState([])
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])


    return (
        <section className="animals">
            <button onClick={
                () => {
                    history.push("/animals/create")
                }
            }>Add Animal</button>
            <div>{
                filteredAnimals.map(animal => {
                    return <div key={animal.id}><Link to={`/animals/detail/${animal.id}`}>
                        {animal.name}
                    </Link></div>
                })
            }</div>
        </section>
    )
}
