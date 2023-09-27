'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Thumbnail from '../Thumbnail/Thumbnail'
import { Timeline } from "../Timeline/Timeline"
import Option from '../../Option/option'


export default function Pictures({ galerieData, names }) {

    const keyImages = galerieData.reduce((acum, { identifiant, year }) => ({ ...acum, [identifiant]: false }), {})

    
    const [views, setViews] = useState(keyImages)
    const [active, setActive] = useState(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [years, setYear ] = useState()
    let filteredPictures
    let yearSelected
    
    const changeView = (item, visibility) => {
        setViews((prevViews) => ({ ...prevViews, [item]: visibility }));
    };

    const changeActive = (value) => {
        setActive(value);
    };

    if (!selectedOption) {
        filteredPictures = galerieData;        
    } else {
        filteredPictures = galerieData.filter(picture => picture.person.includes(selectedOption))
    }


    if (!years) {
        filteredPictures
    } else {
        filteredPictures = galerieData.filter(pictures => pictures.year.includes(years))
        yearSelected = true
    }

    const sortedPictures = filteredPictures.slice().sort((a, b) => {
        const [numA, yearA] = a.identifiant.split('-');
        const [numB, yearB] = b.identifiant.split('-');
        return yearA - yearB || numA - numB;
    })
    

    
    const pictures = sortedPictures && sortedPictures.map((picture) => {
        return (
            <Link key={picture.img} href={`/galerie/imagen/${picture.identifiant}`}>
                <Thumbnail
                    key={picture.identifiant}
                    {...picture}
                    showImage={changeActive}
                    index={picture.identifiant}
                    visible={views[picture.identifiant]}
                    changeView={changeView}
                    vertical={picture.vertical}
                />
            </Link>
        )
    })

    
    return (
        <div>
            <Option onChange={setSelectedOption} names={names} yearSelected={yearSelected} />
            <div className="gallery mb-20 pt-36 ">{pictures}</div>
            <Timeline views={views} onChange={setYear}></Timeline>
        </div>
    )
}
