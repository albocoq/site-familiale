import { getServerSession } from 'next-auth'

import style from './Hero.module.scss'
import Carrousel from './Carrousel/Carrousel'
import TextCard from './TextCard/TextCard'
import Button from './buttons/button'
import { getText } from '../../app/(autre)/libs/getInfo'
import Marquee from './marquee/marquee'
import { getNames } from '../../app/(autre)/libs/getInfo'


const Hero = async () => {
    const text = await getText()
    const name = await getNames()
    const session = await getServerSession()
    const style2d = { width: "56.3vh", height: "77.1%", left: "36vh", top: "7.3%" }

    
    
    return (

        <div className={`relative flex min-h-screen   w-full flex-wrap items-center  ${style.mainBorder}`}>
            <Button session={session} text={text}/>
            <div className={`flex w-50% flex-1 pointer-events-none ${style.Carrousel}`}>
                <div className={style.layerMasked}>
                    <div
                        className=' absolute block'
                        style={style2d}>
                        <div className=" block w-full h-full p-8 ">
                            <Carrousel></Carrousel>
                        </div>
                    </div>
                </div >
            </div>
            <div className="relative flex flex-col justify-center items-center h-screen  w-50% flex-1    ">
                <TextCard text={text} getNames={name}/>
                <p className='relative bottom-16 text-black max-sm:text-xs max-sm:bottom-6'>
                    Mise a jour :  
                </p>
                
            </div>
        </div >
    )
}

export default Hero


