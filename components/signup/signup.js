import React from 'react'
import styles from './signup.module.css'

const SignUp = () => {
    return (
            <div className="d-flex flex-column align-items-center">
                <div className="col-lg-6 col-md-7 col-sm-8 p-1">
                    <input type="text" className={`form-control ${styles.inputElement}`} placeholder="Enter mail" />
                </div>
                <div className="col-lg-6 col-md-7 col-sm-8 p-1">
                    <input type="search" className={`form-control ${styles.inputElement}`} placeholder="Enter username" />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 p-1">
                    <button type="button" className={`btn ${styles.signupButton}`}>Done</button>
                </div>
            </div>
    )
}

export default SignUp