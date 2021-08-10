import React from 'react'
import Image from 'next/image'

import TokenoraWebpage from '../../public/web-preview/tokenora-webpage.png'

const Webpreview = () => {
    return (
        <div id="webpreview">
            <Image
                src={TokenoraWebpage}
                alt="tokenora-webpage"
                placeholder="blur"
            />
        </div>
    )
}

export default Webpreview
