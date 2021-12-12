import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '../../config'

import tokenoraLogo from '../../public/tokenora-logo.svg'
import tokenoraText from '../../public/tokenora-text.svg'
import mediumLogo from '../../public/social-icons/medium.svg'
import instagramLogo from '../../public/social-icons/instagram.svg'
import twitterLogo from '../../public/social-icons/twitter.svg'
import facebookLogo from '../../public/social-icons/facebook.svg'

const Nav = (props) => {

    useEffect(() => {
        fetch(`${config.url}`, {
            method: 'GET'
        })
    }, [])

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

            {props?.showNavLinks &&
                <>
                    <span className="ms-auto d-none d-md-block">
                        {SocialIcons.map(i => {
                            return <a key={i.name} href={i?.link ? i?.link : '/'} target="_blank" rel="noreferrer" className="mx-1 cursor-pointer">
                                <Image
                                    src={i.src}
                                    alt={i.name}
                                    height={40}
                                    width={40}
                                />
                            </a>
                        })}
                    </span>
                    {props?.showJoin && <a href="#join" role="button" className={`btn btn-sm joinButton col-3 d-md-none ms-auto`}>Join</a>}
                </>
            }

        </header>
    )
}

export default Nav
