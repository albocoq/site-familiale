
"use client"
import { useRef, useState } from 'react'
import style from './Timeline.module.scss'
import { useGetGalerie } from '../../../modifier/data.js'

export function Timeline({ views, onChange }) {
    const { yearImages } = useGetGalerie()


    const inScreen = Object.entries(views).filter(([key, value]) => value === true).map(([key, value]) => key)
    const TlRef = useRef<HTMLUListElement>(null); 
    const lastInView = inScreen.at(-1)

    const [firstNum, firstYear] = inScreen[0]?.split("-") ?? ["1", "1895"]
    const [lastNum, lastYear] = inScreen.at(-1)?.split("-") ?? ["1", "1895"]

    const { initOffset, height } = TlRef.current !== null ? CalculatePositions({ yearImages, firstNum, firstYear, lastNum, lastYear, domEl: TlRef.current }) : { initOffset: 10, height: 1500 }

    const tlElements = Object.keys(yearImages).map((year, index) => {
        return (<li key={year} data-year={year} className={year >= firstYear && year <= lastYear ? style.sel : style.noSel} onClick={(e) => goToYear(e, year)}></li>)
    })
    const goToYear = (e, year) => {
        const el = document.getElementById(year);
        onChange(year)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    return (
        <div className={style.timeline} data-top="5%" data-length="10%">
            <ul ref={TlRef}>
                <span className={style.line} style={{ height: `${height}px`, top: `${initOffset}px` }}></span>
                {tlElements}
            </ul>
        </div>
    )
}

function CalculatePositions({ yearImages, firstNum, firstYear, lastNum, lastYear, domEl }) {

    const years = Object.keys(yearImages)
    const totalHeight = parseInt(domEl.offsetHeight) - 9
    const circleHeight = 10
    const segmentHeight = totalHeight / (years.length)

    const indexFirstYear = years.findIndex(value => value === firstYear)
    const indexLastYear = years.findIndex(value => value === lastYear)


    const initOffset = indexFirstYear * segmentHeight + (firstNum - 1) * (segmentHeight - 10) / yearImages[firstYear] + 5
    const endOffset = indexLastYear * segmentHeight + (lastNum) * (segmentHeight) / yearImages[lastYear] - 5

    return { initOffset, height: endOffset - initOffset }
}


