import React, { useState } from 'react'
import Image from 'next/image'
import styles from './social.module.css'

import mediumLogo from '../../public/social-icons/medium.png'
import instagramLogo from '../../public/social-icons/instagram.png'
import twitterLogo from '../../public/social-icons/twitter.png'
import facebookLogo from '../../public/social-icons/facebook.png'

const social = () => {

    const [SocialIcons] = useState([
        {
            name: 'Medium',
            src: mediumLogo
        },
        {
            name: 'Instagram',
            src: instagramLogo
        },
        {
            name: 'Twitter',
            src: twitterLogo
        },
        {
            name: 'Facebook',
            src: facebookLogo
        },
    ])

    return (
        <div className={`row justify-content-center user-select-none`}>
            {SocialIcons.map(i => {
                return (
                    <div key={i.name} className={`d-flex justify-content-center col-lg-2 col-md-3 col-sm-4 p-2 m-1 ${styles.socialDiv}`}>
                        <Image
                            src={i.src}
                            alt={i.name}
                            width={25}
                            height={25}
                        />
                        <span className={`color-7877B1`}>&nbsp;{i.name}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default social
