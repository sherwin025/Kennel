import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")


    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
            .then(res => res.json())
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    const getAnimalById = id => {
        const theId = parseInt(id)
        return fetch(`http://localhost:8088/animals/${theId}`)
                .then(res => res.json())
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, updateAnimal, getAnimalById, releaseAnimal, searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}
