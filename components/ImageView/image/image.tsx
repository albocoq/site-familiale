"use client"
import styles from '../image.module.scss'

import Image from 'next/image';


const image = ({ image }) => {

    let vertical = image.vertical ? 525 : 1000
    let taille = image.vertical ? "mt-2 text-black text-xs" : "mt-2 text-black text-xs"

    let person = "";
    if (image.person !== "") {
        person = `Présent(s) sur cette photo:`;
    }


    return (
        <>
            <div className={styles.image}>
                    <Image
                        src={`/images/pictures/${image.img}`}
                        alt={image.title}
                        width={vertical}
                        height={vertical}
                        style={{ maxWidth: '100vw' }}
                    />
                <h2 className={taille} style={{maxWidth: vertical + 'px'}}>
                    {person} <strong>{image.person}</strong>
                </h2>
            </div>
        </>
    )
}

export default image;
