import React, { useState } from 'react'
import Image from 'next/image'

import tokenoraLogo from '../../public/tokenora-logo.svg'
import tokenoraText from '../../public/tokenora-text.svg'
import mediumLogo from '../../public/social-icons/medium.png'
import instagramLogo from '../../public/social-icons/instagram.png'
import twitterLogo from '../../public/social-icons/twitter.png'
import facebookLogo from '../../public/social-icons/facebook.png'

const Nav = () => {

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
        <header className={`d-flex align-items-center`}>

            <Image
                src={tokenoraLogo}
                alt="logo of tokenora"
            />

            <Image
                src={tokenoraText}
                alt="tokenora"
                className={`ps-1`}
            />

            <span className="ms-auto d-none d-md-block">
                {SocialIcons.map(i => {
                    return <a className="mx-1 cursor-pointer" href='#' key={i.name}>
                        <Image
                            src={i.src}
                            alt={i.name}
                        />
                    </a>
                })}
            </span>
            <a href="#join" role="button" className={`btn btn-sm joinButton col-3 d-md-none ms-auto`}>Join</a>

        </header>
    )
}

export default Nav