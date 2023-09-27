import ImageView from '../../../../components/ImageView/ImageView';
import { getGalerie, getText } from '../../../(autre)/libs/getInfo'

import { getServerSession } from "next-auth";

export default async function Imagen({ params: { imagen } }) {
    const galerieData = await getGalerie()
    const text = await getText()
    const session = await getServerSession()  
    const image = galerieData.find(({ identifiant }) => identifiant === imagen);
    return (
        <div className="flex justify-center items-center h-screen bg-black overflow-hidden">
            <ImageView image={image} text={text} session={session}/>
        </div>
    );
}
