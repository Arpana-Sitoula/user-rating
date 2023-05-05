import React from 'react'
import ThankImg from '../components/ThankImg'
import Notify from '../components/Notify'
import { useLocation } from 'react-router-dom';


const ThankyouState = () => {

  // used to access location object -- important
  const location = useLocation();
  //state.rating has to be in the format we have passed via navigate()
  const rating = location.state.rating;
  return (
    <div className='card2'>
     <ThankImg/><br/>
     <div className='msg'><Notify num={rating}/></div>
     <div className='title'>Thank you!</div>
     <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default ThankyouState