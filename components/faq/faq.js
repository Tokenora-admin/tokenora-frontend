import React, { useState } from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import arrow from '../../public/down-arrow.png'

const faq = () => {

    const [openedFaq, SetopenedFaq] = useState('')

    const [faq] = useState([
        {
            id: 1,
            q1: 'What is Tokenora exactly?',
            a1: "Tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all."
        },
        {
            id: 2,
            q1: 'What is Tokenora exactly?',
            a1: "Tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all."
        }
    ])
    return (
        <>
            <h1>FAQs</h1>
            <div className={`d-flex flex-column align-items-center`}>
                {faq.map(i => {
                    return (
                        <div key={i.id} className={`p-3 m-1 col-7 color-CECDE1 cursor-pointer ${openedFaq === i.id ? styles.faqopen : styles.faq}`} onClick={() => SetopenedFaq(openedFaq === i.id ? '' : i.id)}>
                            <div className={`d-flex justify-content-between`}>
                                <div><strong>{i.q1}</strong></div>
                                <div className={`${openedFaq === i.id && 'rotate-180'} faqicon`}>
                                    <Image
                                        src={arrow}
                                        alt="tokenora-webpage"
                                    />
                                </div>
                            </div>
                            <div className={`pt-3 text-align-left ${openedFaq === i.id ? `d-block` : `d-none`}`}>
                                <p><small>{i.a1}</small></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default faq