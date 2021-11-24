import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        getAnimals()
    }, [])


    return (
        <section className="animals">
            <button onClick={
                () => {
                    history.push("/animals/create")
                }
            }>Add Animal</button>
            <div>{
                animals.map(animal => {
                    return <div key={animal.id}><Link to={`/animals/detail/${animal.id}`}>
                        {animal.name}
                    </Link></div>
                })
            }</div>
        </section>
    )
}
