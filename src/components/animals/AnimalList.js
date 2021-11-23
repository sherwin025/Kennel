import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"


export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getAnimals()
    }, [])


    return (
        <section className="animals">
            {
                animals.map(animal => {
                    return (
                        <div className="animal" key={`animal--${animal.id}`}>
                            <div className="animal__name">
                                Name: {animal.name}
                            </div>
                            <div className="animal__breed">
                                Breed: {animal.breed}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
