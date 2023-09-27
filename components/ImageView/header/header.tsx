"use client"
import Image from "next/image"
import Guide from '../../guide/guide'
import styles from '../image.module.scss'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)



    const handleGoBack = () => {
        router.back();
    };
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
        <>
            <div onClick={handleGoBack} className={styles.loader}></div>
            <span className={styles.loaderText}>Retour</span>
                <Image 
                    src={'/images/info-logo-white.png'}
                    width={35}
                    height={35}
                    alt='logo'
                    onClick={handleClick}
                    className={`absolute top-5 right-24 z-50 cursor-pointer ${styles.info}`}
                />
                {isOpen && (
                    <Guide page="image"/>
                )}
        </>
    )
}
