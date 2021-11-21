import React, { useState, useEffect } from 'react'
import Card from '../cards/card/card'

import CommunityLogo from '../../public/card-icons/community.png'
import NewsUpdatesLogo from '../../public/card-icons/news-and-updates.png'
import ReportsAnalysisLogo from '../../public/card-icons/reports-and-analysis.png'

const Cards = () => {

    const [Cards] = useState([
        {
            main: "community",
            sub: "become a part of a community that will help you understand crypto and blockchain better",
            src: CommunityLogo
        },
        {
            main: "news & updates",
            sub: "get reliable information about what's happening in the crypto world with accurate information and latest updates",
            src: NewsUpdatesLogo
        },
        {
            main: "reports & analysis",
            sub: "get detailed analysis of the most ambitious projects in the crypto space",
            src: ReportsAnalysisLogo
        }
    ])

    useEffect(() => {
        let cards = document.querySelectorAll('.card-gradient');
        Array.from(cards).map((card) => {
            card.addEventListener('mousemove', e => {
                let rect = e.target.getBoundingClientRect()
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                card.style.setProperty('--x', x + 'px')
                card.style.setProperty('--y', y + 'px')
            });
        })
        return () => {
            Array.from(cards).map((card) => {
                card.removeEventListener(true, null)
            })
        }
    }, [])

    return (
        <div id="cards" className="row">
            {
                Cards.map(i => {
                    return (
                        <div className={`col d-flex justify-content-center p-3 mt-5`} key={i.main}>
                            <Card main={i.main} sub={i.sub} src={i.src} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards
