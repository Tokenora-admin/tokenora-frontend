import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = (props) => {

    return (
        <div>
            <div className={`${styles.customCard} card-gradient p-2`}>
                <div className={`${styles.mainText} pt-5 pb-4`}>{props.main}</div>
                <span className={`${styles.subText}`}>{props.sub}</span>
            </div>
            <div className={`${styles.cardLogo} d-flex justify-content-center align-items-center`}>
                <Image
                    src={props.src}
                    alt={props.main}
                    height={40}
                    width={40}
                />
            </div>
        </div>
    )
}

export default Card
