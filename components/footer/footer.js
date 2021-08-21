import React, { useState } from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import footerCover from '../../public/footer.svg'

const Footer = () => {
    const [FooterChips] = useState(['Contact', 'Privacy', 'Terms'])
    return (
        <>
            <div className={`row justify-content-center`}>
                {
                    FooterChips.map(i => {
                        return <a key={i} className={`${styles.footerChips} col-lg-2 col-md-3 col-sm-4 col-6 m-2 cursor-pointer p-1 m-1`}>{i}</a>
                    })
                }
            </div>
            <p className={`color-7877B1 mb-5`}><small>&copy;2021 tokenora</small></p>
            <Image
                src={footerCover}
                alt={`footer-image`}
            />
        </>
    )
}

export default Footer
