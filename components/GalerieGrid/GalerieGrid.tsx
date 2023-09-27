import { getGalerie, getNames, getText, getInfo } from '../../app/(autre)/libs/getInfo'

import './GaleriesGrid.scss'

import Info from '../../components/info/info'
import Pictures from './pictures/pictures'

const GalerieGrid = async () => {

    const galerie = await getGalerie()
    const names = await getNames()
    const text = await getText()

    return (
        <div style={{ maxWidth: '100vw', width: '100vw' }}>
            <div className="bglayer"></div>
            <Pictures galerieData={galerie} names={names} />
            <div className="overlayer"></div>
            <Info text={text}/>
        </div>
    );
};

export default GalerieGrid;
