import GalerieGrid from "../../components/GalerieGrid/GalerieGrid";
import Nav from '../../components/nav'
import { getServerSession } from "next-auth";

import { getGalerie } from '../../app/(autre)/libs/getInfo'

const Galerie = async () => {
    const session = await getServerSession()  
    const galerieData = await getGalerie()

    return (
        <main>
            <div>
                <Nav />
                <GalerieGrid  galerieData={galerieData} timeline/>
            </div>
        </main>

        
    );
};

export default Galerie;