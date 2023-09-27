"use client"
import { useCallback, useState, useEffect } from 'react'

import styles from './notif.module.scss'

import { XCircleIcon } from '@heroicons/react/24/outline'

interface Button {
    label: string;
    onClick: () => void;
}

interface NotifProps {
    title: string
    text: string | JSX.Element
    button?: Button
    isOpen?: boolean
    onClose: () => void
}

const Notif: React.FC<NotifProps> = ({
    title,
    text,
    button,
    isOpen,
    onClose
}) => {
    const [showModal, setShowModal ] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
        setTimeout(() => {
            onClose()
        }, 10000)
    }, [isOpen, onClose])

    const handleClose = useCallback(() => {
        setShowModal(false)
        setTimeout(() => {
            onClose()
        }, 1000)
    }, [onClose])

    

    if (!isOpen) {
        return null
    }

    return (
        <main className={styles.main}>
            <div className={`
                ${styles.card} 
                ${showModal ? 'opacity-100' : "opacity-0"}
                ${showModal ? 'translate-y-0' : 'translate-y-100'}
            `}>
                    <p className={styles.title}><span>{title}</span></p>
                    <p className={styles.text}>{text}</p>
                    {button && (
                        <button className={styles.button} onClick={button.onClick}>
                            {button.label}
                        </button>
                    )}
                    <XCircleIcon className={styles.cardCross} width={35} onClick={handleClose}/>
            </div>
        </main>
    )
}
export default Notif