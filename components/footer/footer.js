import React, { useState } from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

import footerCover from '../../public/footer.png'

const Footer = () => {
    const [FooterChips] = useState([
        {
            name: 'Contact us',
            to: `mailto:tokenora@protonmail.com`
        },
        {
            name: 'Privacy',
            to: '/privacy'
        },
        {
            name: 'Terms',
            to: '/terms'
        }
    ])
    return (
        <>
            <div className={`row justify-content-center`}>
                {
                    FooterChips.map(i => {
                        return <Link href={`${i.to}`} key={i.name}><a className={`${styles.footerChips} col-lg-2 col-md-3 col-sm-4 col-6 m-2 cursor-pointer p-1 m-1`}>{i.name}</a></Link>
                    })
                }
            </div>
            <p className={`color-7877B1 mb-5`}><small>&copy;2021 tokenora</small></p>
            <Image
                src={footerCover}
                alt={`footer-image`}
                placeholder="blur"
            />
        </>
    )
}

export default Footer
