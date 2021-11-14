import React from 'react'
import styles from './modal.module.css'

const Modal = (props) => {
    return (
        <div className={`${styles.modal}`} style={{display: props.open ? 'block' : 'none'}}>
            <div className={styles.modalcontent}>
                <span onClick={() => props.modalClose()} className={styles.close}>&times;</span>
                <p className={styles.modalcontentData}>{props.message}</p>
            </div>

        </div>
    )
}

export default Modal
