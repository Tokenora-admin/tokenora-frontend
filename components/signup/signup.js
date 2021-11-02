import React, { useState } from 'react'
import styles from './signup.module.css'

const SignUp = () => {

    const [Email, setEmail] = useState('')
    const [emailRegExp] = useState(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    const signupHandler = () => {
        console.log(emailRegExp.test(Email))
    }

    return (
        <>
            <div id="signup" className="d-flex flex-column align-items-center">
                <div className="col-lg-6 col-md-7 col-sm-8 col-12 p-1">
                    <input type="email"
                        className={`form-control ${styles.inputElement}`}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        spellCheck={false}
                        required
                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-1">
                    <button type="button"
                        className={`btn ${styles.signupButton}`}
                        disabled={Email.length === 0}
                        onClick={() => signupHandler()}
                    >Signup</button>
                </div>
            </div>
        </>
    )
}

export default SignUp
