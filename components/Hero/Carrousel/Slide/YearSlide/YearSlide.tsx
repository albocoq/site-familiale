
import { OrnamentTitle } from '../../../../Ornaments/Ornaments'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: ['400'] })

const YearSlide = ({ year, index }) => {
    return (
        <div className={`keen-slider__slide number-slide${index} w-full h-full flex absolute min-w-full justify-center items-center flex-col`} >
            <OrnamentTitle width="250px" />
            <h1 className={`text-8xl mt-4 ${allura.className}`}>{year}</h1>
            <OrnamentTitle width="250px" style={{ rotate: "180deg" }} />
        </div>
    )
}

export default YearSlide