import Image from "next/image"
import { useState } from "react"
const ImageSlide = ({ image, title, index }) => {

    return (

        <div className={`keen-slider__slide number-slide${index} w-full h-full flex absolute min-w-full justify-center items-center`} >
            <Image
                src={`/images/${image}.webp`}
                alt={title}
                priority
                width="930"
                height="1080"
                sizes="100%"
                style={{
                    objectFit: 'contain',
                }}
                className={`object-center `}

            />

        </div>
    )
}

export default ImageSlide