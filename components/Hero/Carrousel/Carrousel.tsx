"use client"
import React from 'react'

import { useKeenSlider } from 'keen-slider/react.es'

import Slide from './Slide/Slide'
import "keen-slider/keen-slider.min.css"
import './Carrousel.css'
import { SlidesArray } from '../../../constants/slides'


const SliderPictures = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    const misliders = SlidesArray.map((data, index) => < Slide key={data.title} {...data} index={index} />)
    return (
        <>
            <div ref={sliderRef} className="keen-slider  slider">

                {misliders}

            </div>
        </>
    )
}

export default SliderPictures
