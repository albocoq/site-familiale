import { XCircleIcon } from '@heroicons/react/24/outline'

import styles from './option.module.scss'
import Notif from '../../components/notif/notif'

import { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Option = ({ onChange, names, yearSelected}) => {
    const router = useRouter()

    const [isOpen , setIsOpen ] = useState(false)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [isNotifOpen, setIsNotifOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [suprimeChange, setsuprimeChange] = useState<HTMLSelectElement | null>(null)
    

    const sortedNames = names.sort((a, b) => {
        const aLength = a.person.split(' ')
        const bLength = b.person.split(' ')
        const nomA = aLength[1]
        const nomB = bLength[1]
        const prenoA = aLength[0]
        const prenoB = bLength[0]
        

        const nameA = String(nomA).toLowerCase();
        const nameB = String(nomB).toLowerCase();
        const prenomA = String(prenoA).toLowerCase();
        const prenomB = String(prenoB).toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        if (prenomA < prenomB) {
            return -1;
        }
        if (prenomA > prenomB) {
            return 1;
        }
        return 0;
    });

    const picture = sortedNames.map((persons) => (
        <option key={persons.id} value={persons.person}>{persons.person}</option>
    ))


    
    const handleClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpenPopup(false);
        setIsNotifOpen(false);
    };
    
    const handleRetour = () => {
        suprimeChange && router.refresh()
        suprimeChange && router.push("/galerie")
        suprimeChange && console.log("dqdqdqsdq");
        
        
        if (isOpen && suprimeChange) {
            onChange("");
            setIsOpen(false)
            suprimeChange.selectedIndex = 0
        }
    }
    
    const handleChange = (e) => {
        onChange(e.target.value)
        handleClick()
        setsuprimeChange(e.target)
    }
    
    useEffect(() => {
        if (yearSelected === true) {
            setIsOpen(true)
        }

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [yearSelected]);

    const leftStyle = windowWidth >= 600 ? '5%' : '50%';
    const widthStyle = windowWidth >= 600 ? '25%' : "auto";
    
    return (
        <>     
            <select
                className={`fixed top-10 h-10 bg-transparent cursor-pointer text-black border border-black rounded-md z-30 ${styles.select}`}
                style={{left: leftStyle, width: widthStyle}}
                onChange={handleChange}
                onClick={() => setIsOpenPopup(true)}
            >
                <option className='text-sm'>Sélection par nom</option>
                {picture}
            </select>
            {isOpen && (
                <XCircleIcon className={styles.cross} width={35} onClick={handleRetour} />
            )}
            {isOpenPopup && isNotifOpen && (
                <Notif 
                    isOpen
                    onClose={handleClose} 
                    title="IMPORTANT" 
                    text='La gente féminine peut être sélectionnée soit par son nom de jeune fille soit par son nom de femme mariée'
                />
            )}
            <Link href={"/"}><button className={styles.retour}>Page d&apos;entrée</button></Link>
        </>
    )
}

export default Option;
