"use client"
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';

import styles from "../image.module.scss"

import { useState } from 'react';


interface InformationProps {
    image: {
        id: string;
        img: string;
        title: string;
        text: string;
        person: string;
        year: string;
        width: number;
        height: number;
        vertical?: undefined;
    };
    session
}

const Information: React.FC<InformationProps> = ({image, session}) => {
    const [isOpen, setIsOpen ] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
        if (isOpen === true) {
            setIsOpen(false)
        }
    }

    return (
        <>
        
            <div className="flex flex-col items-center">
                <div className={styles.text}>
                    <span className="underline">{image.title}</span> <br /> <br />
                    {image.text} <br /> <br />
                    Année: <strong>{image.year}</strong>
                    <br />
                    <Divider sx={{marginTop: "20px"}}/>
                    <button onClick={handleClick} className={`mt-3 ${styles.cta}`}>     
                        <span className={styles.hoverUnderlineAnimation}> Ajouter une information </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </div>
                    {isOpen && (
                        <div className={`z-20 ml-48 mt-64 text-black w-1/3 absolute ${styles.formulaire}`}>
                            <form className='flex flex-col w-4/5'>
                                <input type="text" name="from_image" className='absolute left-2 top-10 bg-black -z-10'/>
                                <input type="text" name="from_email" className='absolute left-2 top-10 bg-black -z-10'/>
                                <input type="text" name="from_name" className='absolute left-2 top-10 bg-black -z-10'/>
                                <TextField
                                    id="information"
                                    label="Information"
                                    name='message'
                                    multiline
                                    maxRows={6}
                                    minRows={4}
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                        color: 'black', 
                                        },
                                        '& .MuiInputBase-input': {
                                        color: 'black', 
                                        },
                                        '& .MuiFilledInput-root': {
                                        backgroundColor: 'white', 
                                        },
                                        '& .MuiFilledInput-underline:before': {
                                        borderBottomColor: 'white', 
                                        },
                                        '&:hover .MuiInputLabel-root': {
                                            color: 'black',
                                        },
                                        '&:hover .MuiInputBase-input': {
                                            color: 'black',
                                        },
                                        '&:hover .MuiFilledInput-root': {
                                            backgroundColor: 'white',
                                        },
                                        '&:hover .MuiFilledInput-underline:before': {
                                            borderBottomColor: 'black',
                                        },
                                        marginTop: "15px"
                                    }}
                                />
                            <button type="submit" className={styles.buttonSubmit}>
                                Envoyez
                            </button>

                            </form>
                        </div>
                    )}
                <button className={styles.button}>
                    <div className={styles.sign}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></div>
                    <div className={styles.texte}>Télécharger</div>
                </button>
            </div>
        </>
    )
}
export default Information