import YearSlide from "./YearSlide/YearSlide"
import ImageSlide from './ImageSlide/ImageSlide'

const Slide = ({ image, title, year, index }) => {
    return (
        <>
            <YearSlide year={year} index={index * 2 + 1}></YearSlide>
            <ImageSlide image={image} title={title} index={(index + 1) * 2}></ImageSlide>
        </>
    )
}

export default Slide