"use client"
import Guide from '../../guide/guide'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import style from '../Hero.module.scss'


export default function Button({ session, text }) {
    const [isKey, setIsKey ] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [ isButton, setIsButton ] = useState(false)

    
    const handleClick = (e) => {
        setIsOpen(true)
        if (isOpen === true) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (session?.user?.name === "DanielCoquelet") {
            setIsButton(true);
        } else {
            setIsButton(false);
        }
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [session]);

    return (
        <div>
            <Image 
                src={'/images/info-logo.png'}
                width={35}
                height={35}
                alt='logo'
                onClick={handleClick}
                className={`absolute z-50 top-5 right-5 cursor-pointer ${style.info}`}
            />
            {isOpen && (
                <Guide page="entree" texte={text[1].text}/>
            )}
        </div>
    )
}
