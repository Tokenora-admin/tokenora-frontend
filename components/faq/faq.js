import React, { useState } from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import arrow from '../../public/down-arrow.png'

const Faq = () => {

    const [openedFaq, SetopenedFaq] = useState('')

    const [faq] = useState([
        {
            id: 1,
            q1: 'what is tokenora exactly?',
            a1: "tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all."
        },
        {
            id: 2,
            q1: 'what makes tokenora so special?',
            a1: `our mission is simple - helping everyone understand about crypto currency and everything that relates to it. \n
            
            we created tokenora because we believe decentralisation is the ultimate future, and to get everyone on board with it, we have to make ourselves familiar with it first. \n

            at tokenora, we play the zero sum game. everyone grows. and that's what makes us special.`
        },
        {
            id: 3,
            q1: 'how can you join tokenora?',
            a1: "you can start by typing in your email and reserving a username."
        },
        {
            id: 4,
            q1: 'is this another social media app or something?',
            a1: "Tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all."
        }
    ])
    return (
        <div id="faq" className={`d-flex flex-column align-items-center`}>
            <h1>FAQs</h1>
            {faq.map(i => {
                return (
                    <div key={i.id} className={`p-3 m-1 col-lg-7 col-md-9 col-sm-10 col-10 color-CECDE1 cursor-pointer ${openedFaq === i.id ? styles.faqopen : styles.faq}`} onClick={() => SetopenedFaq(openedFaq === i.id ? '' : i.id)}>
                        <div className={`d-flex justify-content-between align-items-center`}>
                            <div><strong>{i.q1}</strong></div>
                            <div className={`${openedFaq === i.id && 'rotate-180'} faqicon`}>
                                <Image
                                    src={arrow}
                                    alt="tokenora-webpage"
                                />
                            </div>
                        </div>
                        <div className={`pt-3 text-align-left ${openedFaq === i.id ? `d-block` : `d-none`}`}>
                            <p className="whitespace-preline"><small>{i.a1}</small></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Faq
