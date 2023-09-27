import Information from './information/information';
import Imagesrc from './image/image'
import Snow from '../snow/snow';
import Header from './header/header';

interface ImageViewProps {
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
    session;
}

const ImageView: React.FC<ImageViewProps> = ({ image, session }) => {

    return (
        <>
            <Header />
            <Snow />
            <Imagesrc image={image} />
            <Information image={image} session={session}/>
        </>
    )
}
export default ImageView