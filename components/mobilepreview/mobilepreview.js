import React, { useState } from 'react'

import NextImageZoomWrapper from '../NextImageZoomWrapper/NextImageZoomWrapper'

import TokenoraMobileNotifications from '../../public/mobile-preview/notifications.png'
import TokenoraMobilePosts from '../../public/mobile-preview/posts.png'
import TokenoraMobileStatistics from '../../public/mobile-preview/statistics.png'

const MobilePreview = () => {

    const [MobilePreviews] = useState([
        {
            src: TokenoraMobileNotifications
        },
        {
            src: TokenoraMobilePosts
        },
        {
            src: TokenoraMobileStatistics
        }
    ])

    return (
        <div id="mobilepreview" className={`row`}>
            {
                MobilePreviews.map((i, index) => {
                    return (
                        <div key={index} className={`col-4`}>
                            <NextImageZoomWrapper
                                src={i?.src}
                                alt="Tokenora mobile preview"
                                priority={false}
                                height={550}
                                width={275}
                                className={`mobile-screen-preview`}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MobilePreview
