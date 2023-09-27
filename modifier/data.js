"use client"
import { useState, useEffect } from "react"
import axios from "axios"


export function GetPersons() {
    const [persons, setPersons] = useState([])
    
    useEffect(() => {
        axios.get('api/names')
            .then((res) => {
                setPersons(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])
    
    const picture = persons.map((persons) => (
        <option key={persons.id} value={persons.person}>{persons.person}</option>
    ))

    return picture
}

export function useGetGalerie() {

    const [galerieData, setGalerieData ] = useState([]) 

    useEffect(() => {
        axios.get('api/galerie')
            .then((res) => {
                setGalerieData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const keyImages = galerieData.reduce((acum, { identifiant, year }) => ({ ...acum, [identifiant]: false }), {})

    const yearImages =  galerieData.reduce((acum, { year }) => {
        if (acum[year] !== undefined)
            return ({ ...acum, [year]: acum[year] + 1 })
        return ({ ...acum, [year]: 1 })
    }, {})
    
    const GalerieDataObj = galerieData.reduce((acum, { identifiant, ...otherProps }) => ({ ...acum, [identifiant]: { ...otherProps } }), {})
    
    function getLast() {
        if (galerieData) {
            if (galerieData.length > 0) {
                const lastItem = galerieData[galerieData.length - 1];
                const [identifiant, year] = lastItem.identifiant.split("-");
                return { identifiant, year };
            }
        }
        return { identifiant: null, year: null };
    }
    
    const lastImage = getLast();


    return {
        galerieData,
        yearImages,
        keyImages,
        GalerieDataObj,
        lastImage
    };
}