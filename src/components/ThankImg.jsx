import React from 'react'
import thankyou from '../assets/illustration-thank-you.svg'
import { useLocation } from 'react-router-dom'

const ThankImg = () => {
    
    return (
        <React.Fragment>    
                <img src={thankyou} />
        </React.Fragment>
    )
}

export default ThankImg