"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

import Guide from '../guide/guide'

export default function Info({text}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });



    return (
        <div>
            <Image 
                src={'/images/info-logo.png'}
                width={35}
                height={35}
                alt='logo'
                onClick={handleClick}
                className='fixed top-10 z-50 cursor-pointer info'
                style={{right: "11%"}}
            />
            {isOpen ? (
                <Guide page="galerie" texte={text[2].text}/>
            ) : <></>}
        </div>
    )
}
