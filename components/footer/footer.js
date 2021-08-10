import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import footerCover from '../../public/footer.svg'

const footer = () => {
    return (
        <>
        <div className={`row justify-content-center`}>
            <a className={`${styles.footerChips} col-lg-2 col-md-3 col-sm-4 m-2 cursor-pointer p-1 m-1`}>Contact</a>
            <a className={`${styles.footerChips} col-lg-2 col-md-3 col-sm-4 m-2 cursor-pointer p-1 m-1`}>Privacy</a>
            <a className={`${styles.footerChips} col-lg-2 col-md-3 col-sm-4 m-2 cursor-pointer p-1 m-1`}>Terms</a>
        </div>
        <p className={`color-7877B1`}><small>&copy;2021 Tokenora</small></p>
        <Image 
            src={footerCover}
        />
        </>
    )
}

export default footer
