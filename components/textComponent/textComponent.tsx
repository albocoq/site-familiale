import './guide.module.scss'

export default function textComponent({ text }) {
    let texte
    if ( typeof text === 'string') {
        texte = text
    } else {
        texte = text.texte
    }
    return (
        <>
            <p dangerouslySetInnerHTML={{ __html: texte }} />        
        </>
    )
}
