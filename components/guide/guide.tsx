import { Divider } from '@mui/material'
import TextComponent from '../textComponent/textComponent'

import styles from '../textComponent/guide.module.scss'
import { signOut } from 'next-auth/react'

interface GuideProps {
    page: string
    texte?: string
}

const Guide: React.FC<GuideProps> = ({
    page,
    texte
}) => {
    
    return (
        <main className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm z-40 flex justify-center items-center">
            <div className={styles.bg}>
                <h1>Guide Utilisateur</h1>
                <Divider />
                {
                    page === "image" ? 

                        <p>
                            Cette page affiche la photo selectionnée en grand format. <br />
                            Ce bouton <span><button className={styles.buttonDownload}><div className={styles.sign}><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'/></svg></div>
                            </button></span>  vous permet de télécharger sur votre 
                            disque dur la photo en question. <br /> En cliquant sur <strong>Ajouter une information</strong>, vous accèdez à un formulaire au sein
                            duquel vous allez compléter / modifier l&apos;information existante.  <br /> Les personnes présentes sur les photos sont mentionnées
                            en bas de celles-ci. <br /> Vous noterez parfois la présence de <strong>?</strong> en lieu et place d&apos;un nom. Si vous disposez de 
                            l&apos;information, merci de nous la communiquer. <br /> <br /><strong>Note importante :</strong> Si l&apos;information existante 
                            est erronée, n&apos;hésitez pas à le signaler.
                        </p> : 
                    
                    page === "galerie" ? 

                        <div>
                            <TextComponent text={{texte}}/>
                        </div> : 

                    page === "entree" ? 
                        (
                            <div className='flex items-center mt-10 '>
                                <TextComponent text={{texte}}/>
                            </div>
                        )  : <></>

                }
                <button className={styles.deco} onClick={() => signOut()}>
                    Se déconnecter
                </button>
            </div>

        </main>
    )
}
export default Guide