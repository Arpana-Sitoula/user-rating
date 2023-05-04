import React from 'react'
import ThankImg from '../components/ThankImg'
import Notify from '../components/Notify'


const ThankyouState = ({nums}) => {

  return (
    <div className='card2'>
     <ThankImg/><br/>
     <div className='msg'><Notify num="4"/></div>
     <div className='title'>Thank you!</div>
     <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default ThankyouState