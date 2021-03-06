import React, { useState } from 'react'
import Image from 'next/image'
import styles from './social.module.css'

import mediumLogo from '../../public/social-icons/medium.svg'
import instagramLogo from '../../public/social-icons/instagram.svg'
import twitterLogo from '../../public/social-icons/twitter.svg'
import facebookLogo from '../../public/social-icons/facebook.svg'

const Social = () => {

    const [SocialIcons] = useState([
        {
            name: 'Medium',
            src: mediumLogo,
            link: ''
        },
        {
            name: 'Instagram',
            src: instagramLogo,
            link: 'https://www.instagram.com/tokenoraindia/'
        },
        {
            name: 'Twitter',
            src: twitterLogo,
            link: ''
        },
        {
            name: 'Facebook',
            src: facebookLogo,
            link: ''
        },
    ])

    return (
        <div id="social" className={`row justify-content-center user-select-none`}>
            {SocialIcons.map(i => {
                return (
                    <a key={i.name} href={i?.link ? i?.link : '/'} target="_blank" rel="noreferrer" className={`d-flex justify-content-center col-lg-2 col-md-3 col-sm-4 col-7 p-2 m-1 cursor-pointer ${styles.socialDiv}`}>
                        <Image
                            src={i.src}
                            alt={i.name}
                            width={25}
                            height={25}
                        />
                        <span className={`color-7877B1`}>&nbsp;{i.name}</span>
                    </a>
                )
            })}

        </div>
    )
}

export default Social
