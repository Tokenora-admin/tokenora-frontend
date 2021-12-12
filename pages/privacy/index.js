import React from 'react'
import Nav from '../../components/nav/nav'

const privacy = () => {
    return (
        <div className={`container-fluid`}>

            <div className={`container-md`}>
                <Nav showNavLinks={true} showJoin={false}/>
            </div>
            <div>
                Privacy policies
            </div>
        </div>
    )
}

export default privacy
