import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer'
import Social from '../../components/social/social'
import Modal from '../../components/modal/modal'

import { config } from '../../config'

const VerifyPage = () => {
    const router = useRouter()

    const [Token, SetToken] = useState('')
    const [UserName, SetUserName] = useState('')
    const [UserEmail, SetUserEmail] = useState('')
    const [ShowSetupSection, SetShowSetupSection] = useState(false)
    const [OpenModal, SetOpenModal] = useState(false)
    const [ShowUserVerified, SetShowUserVerified] = useState(false)
    const [Error, SetError] = useState('')

    useEffect(() => {
        if (!router.isReady) return;
        const { token } = router.query
        SetToken(token)

        fetch(`${config.url}/api/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "token": token }),
        })
            .then(response => {
                response.json().then(data => {
                    if (response.status === 200) {
                        if (data?.user?.username) {
                            SetError(data?.msg) //selected username
                            SetOpenModal(true)
                            SetShowUserVerified(true)
                        } else {
                            SetUserEmail(data?.user?.email) //not selected username
                            SetShowSetupSection(true)
                        }
                    } else {
                        SetError(data?.error) //invalid Token
                        SetOpenModal(true)
                    }
                })
            })

    }, [router.isReady, router.query]);

    const userNameSetupHandler = () => {
        fetch(`${config.url}/api/check-username`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "token": Token, "username": UserName }),
        })
            .then(response => {
                response.json().then(data => {
                    if (response.status === 200) {
                        SetOpenModal(true)
                        SetError(data.msg)
                        SetShowUserVerified(true)
                        SetShowSetupSection(false)
                    } else {
                        SetOpenModal(true)
                        SetError(data.error)
                    }
                })
            }
            )

    }

    return (
        <div className={`container-fluid text-center`}>

            <Modal
                open={OpenModal}
                modalClose={() => SetOpenModal(false)}
                message={Error}
            />

            <div className={`container-md`}>
                <Nav showNavLinks={false} />
            </div>

            <div style={{ minHeight: '110px' }}>

                {ShowSetupSection
                    && <div style={{ paddingBlock: 'min(15vh, 100px)' }}>
                        <span className={`mainheading`}>
                            <p className="h1"><strong>hi <span className={`color-F7931A`}>{UserEmail}</span>, setup username below...</strong></p>
                        </span>
                        <br />
                        <div className="d-flex flex-column align-items-center">
                            <div className="col-lg-6 col-md-7 col-sm-8 col-12 p-1">
                                <input type="text"
                                    className={`form-control inputElement`}
                                    onChange={(e) => SetUserName(e.target.value)}
                                    value={UserName}
                                    placeholder="Enter username"
                                    spellCheck={false}
                                    required
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-1">
                                <button type="button"
                                    className={`btn signupButton`}
                                    disabled={UserName.length === 0}
                                    onClick={() => userNameSetupHandler()}
                                >Done</button>
                            </div>
                        </div>
                    </div>}

                {
                    ShowUserVerified && <div>You&#39;re all set.</div>
                }

            </div>

            <div style={{ position: 'relative', bottom: '0px' }}>
                <Social />
                <Footer />
            </div>

        </div>
    )
}

export default VerifyPage
