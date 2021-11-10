import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import Social from '../components/social/social'

const VerifyPage = () => {
    const router = useRouter()

    const [UserName, SetUserName] = useState('')
    const [ShowSetupSection, SetShowSetupSection] = useState(false)
    const [ShowAlert, SetShowAlert] = useState(false)
    const [Error, SetError] = useState('')
    const [UserEmail, SetUserEmail] = useState('')
    const [Token, SetToken] = useState('')

    useEffect(() => {
        if (!router.isReady) return;
        const { token } = router.query
        SetToken(token)

        fetch('http://localhost:4000/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "token": token }),
        })
            .then(response => response.json())
            .then(data => {
                if (data?.msg === "Verified") {
                    if (data?.user?.username) {
                        SetError(data?.msg)
                        SetShowAlert(true)
                    } else {
                        SetUserEmail(data?.user?.email)
                        SetShowSetupSection(true)
                    }
                } else {
                    SetError(data?.error)
                    SetShowAlert(true)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })

    }, [router.isReady]);

    const userNameSetupHandler = () => {
        fetch('http://localhost:4000/api/check-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "token": Token, "username": UserName }),
        })
            .then(response => response.json())
            .then(data => {
                if (data?.msg === "Username selected") {
                    SetShowAlert(true)
                    SetError(data.msg)
                    SetUserName('')
                } else {
                    SetShowAlert(true)
                    SetError(data.error)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <div className={`container-fluid text-center`}>

            <div className={`container-md`}>
                <Nav showNavLinks={false} />
            </div>

            <div style={{ minHeight: '110px' }}>

                {ShowAlert && <div>{Error}</div>}

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

            </div>

            <div style={{ position: 'relative', bottom: '0px' }}>
                <Social />
                <Footer />
            </div>

        </div>
    )
}

export default VerifyPage
