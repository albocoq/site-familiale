"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import './Thumbnail.scss'

const Thumbnail = ({ img, title, text, person, year, vertical, identifiant, changeView, index, visible, showImage }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { ref, inView, entry } = useInView({
        threshold: 0,
    })


    // useEffect(() => {
    //     if (visible !== inView) {
    //         changeView(identifiant, inView);
    //     }
    // }, [visible, inView, identifiant, changeView]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const WidthImg = windowWidth <= 1749 ? "w-72" : "w-96"

    const styled = { opacity: inView ? "1" : "0" }
    return (
        <div ref={ref} className={`flex flex-col justify-center items-center cursor-pointer relative`} style={styled} >
            {identifiant.split("-")[0] === "1" &&
                <div className="absolute top-0 left-0  block padding-3" style={{ top: "-145px", zIndex: 99999, color: "transparent" }} >
                    <div id={identifiant.split("-")[1]}>
                        {"a"}
                    </div>
                </div>
            }
            <div className={`${WidthImg} frame`} onClick={() => showImage(identifiant)}>
                <div className="imageContainer">
                    <Image
                        src={`/images/pictures/${img}`}
                        alt={identifiant}
                        priority
                        width="930"
                        height="1080"
                        sizes="15vw"
                        onLoadingComplete={() => setIsLoaded(true)}
                        style={{
                            objectFit: 'contain',
                        }}
                        className={`object-center `}
                    />
                </div>
                <div className='text-black text-sm mt-1'>
                    {title + " ~ " + year}
                </div>
            </div>
        </div>
    )
}

export default Thumbnail
