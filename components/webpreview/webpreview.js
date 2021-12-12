import React from 'react'
import NextImageZoomWrapper from '../NextImageZoomWrapper/NextImageZoomWrapper'

import TokenoraWebpage from '../../public/web-preview/tokenora-webpage.png'

const Webpreview = () => {
    return (
        <div id="webpreview">
            <NextImageZoomWrapper
                src={TokenoraWebpage}
                alt="Tokenora Webpage preview"
                priority={false}
            />
        </div >
    )
}

export default Webpreview
