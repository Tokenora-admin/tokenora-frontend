import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import tokenoraLogo from '../../public/tokenora-logo.svg'
import tokenoraText from '../../public/tokenora-text.svg'
import mediumLogo from '../../public/social-icons/medium.svg'
import instagramLogo from '../../public/social-icons/instagram.svg'
import twitterLogo from '../../public/social-icons/twitter.svg'
import facebookLogo from '../../public/social-icons/facebook.svg'

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
        <header id="nav" className={`d-flex align-items-center`}>

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
                    return <Link href='/' key={i.name}><a className="mx-1 cursor-pointer">
                        <Image
                            src={i.src}
                            alt={i.name}
                            height={40}
                            width={40}
                        />
                    </a>
                    </Link>
                })}
            </span>
            <a href="#signup" role="button" className={`btn btn-sm joinButton col-3 d-md-none ms-auto`}>Join</a>

        </header>
    )
}

export default Nav
