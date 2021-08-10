import React from 'react'
import TokenoraWebpage from '../../public/web-preview/tokenora-webpage.png'
import Image from 'next/image'

const webpreview = () => {
    return (
        <Image
            src={TokenoraWebpage}
            alt="tokenora-webpage"
        />
    )
}

export default webpreview
