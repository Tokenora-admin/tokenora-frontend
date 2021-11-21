import React, { useState } from 'react'
import Modal from '../modal/modal'
import { config } from '../../config'

const SignUp = () => {

    const [Email, setEmail] = useState('')
    const [Message, SetMessage] = useState('')
    const [OpenModal, SetOpenModal] = useState(false)
    const [emailRegExp] = useState(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    const signupHandler = () => {
        if (emailRegExp.test(Email)) {

            fetch(`${config.url}/api/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "email": Email }),
            })
                .then(response => response.json())
                .then(data => {
                    data?.user &&
                        SetOpenModal(true)
                    SetMessage('Thank you, please check your inbox')

                    data?.error &&
                        (typeof (data?.error) === 'string'
                            ? SetMessage(data?.error)
                            : SetMessage(data?.error?.error[0]?.msg))
                    SetOpenModal(true)
                })
                .catch((error) => {
                    console.error('Error:', error)
                })

        } else {
            SetOpenModal(true)
            SetMessage('Please enter a proper email ID.')
        }
    }

    return (
        <>
            <div id="signup" className="d-flex flex-column align-items-center">
                <Modal
                    open={OpenModal}
                    modalClose={() => SetOpenModal(false)}
                    message={Message}
                />
                <div className="col-lg-6 col-md-7 col-sm-8 col-12 p-1">
                    <input type="email"
                        className={`form-control inputElement`}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        value={Email}
                        spellCheck={false}
                        required
                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-1">
                    <button type="button"
                        className={`btn signupButton`}
                        disabled={Email.length === 0}
                        onClick={() => signupHandler()}
                    >Signup</button>
                </div>
            </div>
        </>
    )
}

export default SignUp
