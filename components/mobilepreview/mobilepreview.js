import React from 'react'
import Image from 'next/image'

import TokenoraMobileNotifications from '../../public/mobile-preview/notifications.png'
import TokenoraMobilePosts from '../../public/mobile-preview/posts.png'
import TokenoraMobileStatistics from '../../public/mobile-preview/statistics.png'

const Webpreview = () => {
    return (
        <div id="mobilepreview" className={`row`}>
            <div className={`col-4`}>
                <Image
                    src={TokenoraMobileNotifications}
                    alt="tokenora-webpage"
                    placeholder="blur"
                    height={550}
                    width={275}
                    className={`mobile-screen-preview`}
                />
            </div>
            <div className={`col-4`}>
                <Image
                    src={TokenoraMobilePosts}
                    alt="tokenora-webpage"
                    placeholder="blur"
                    height={550}
                    width={275}
                    className={`mobile-screen-preview`}
                />
            </div>
            <div className={`col-4`}>
                <Image
                    src={TokenoraMobileStatistics}
                    alt="tokenora-webpage"
                    placeholder="blur"
                    height={550}
                    width={275}
                    className={`mobile-screen-preview`}
                />
            </div>
        </div>
    )
}

export default Webpreview
