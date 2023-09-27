"use client"
import { Italianno } from 'next/font/google'
import { La_Belle_Aurore } from 'next/font/google'
import Link from 'next/link'

import { OrnamentCorner, OrnamentTop } from '../../Ornaments/Ornaments'
import styles from './TextCard.module.scss'
import TextComponent from '../../textComponent/textComponent'
import Marquee from '../marquee/marquee'

const italianno = Italianno({ subsets: ['latin'], weight: ['400'] })
const labelleaurore = La_Belle_Aurore({ subsets: ['latin'], weight: ['400'] })

const TextCard = ({ text, getNames }) => {
    let textaera = text[0].text
    
    return (
        <div className=" w-full h-full px-12 py-20 flex justify-center items-center text-black z-30 max-sm:px-0">
            <div className=" flex  h-full flex-col justify-between relative max-sm:w-96 max-sm:items-center" style={{ aspectRatio: ".8" }}>
                <div className="flex justify-between w-full absolute top-0 items-start max-sm:w-5/6 ">
                    <OrnamentCorner style={{ width: "25%", height: "auto", aspectRatio: "1" }} />
                    <OrnamentTop style={{ width: "30%", height: "auto", aspectRatio: "4 " }} />
                    <OrnamentCorner style={{ scale: "-1 1", width: "25%", height: "auto", aspectRatio: "1" }} />
                </div>
                <div className=' flex-1 flex flex-col items-center px-5  '>
                    <h1 className={`text-7xl ${italianno.className} ${styles.title}`}>Portrait de famille</h1>
                    <div className={`${labelleaurore.className} ${styles.textIntro} max-sm:p-0`} style={{ fontSize: "2vh" }}>
                        <TextComponent text={textaera}/>
                    </div>
                    <Marquee getNames={getNames}/>
                    <div className={`flex justify-center items-center ${styles.buttonContainer}`} style={{height: "15%", width: "100%"}}>
                        <Link href='/galerie'>
                            <button className={styles.button}>
                                <div className={styles.svgWrapper1}>
                                    <div className={styles.svgWrapper}>
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                    </svg>
                                    </div>
                                </div>
                                <span>Galerie</span>
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="flex justify-between w-full absolute bottom-0 items-end pointer-events-none max-sm:w-5/6">
                    <OrnamentCorner style={{ scale: "1 -1", width: "25%", height: "auto", aspectRatio: "1" }} />
                    <OrnamentTop style={{ scale: "1 -1", width: "30%", height: "auto", aspectRatio: "4 " }} />
                    <OrnamentCorner style={{ scale: "-1 -1", width: "25%", height: "auto", aspectRatio: "1" }} />
                </div>
            </div>
        </div >
    )
}

export default TextCard