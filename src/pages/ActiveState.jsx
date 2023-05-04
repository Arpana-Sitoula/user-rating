import React, { useState } from 'react'
import Star from '../components/star' 
import Bubble from '../components/resuable/Bubble'
import Button from '../components/Button'
import { Link } from "react-router-dom";

const ActiveState = ({nums}) => {
  const [activeState, setActiveState] = useState(true); 
  const [numbers, setNumber] = useState(null);

  
  const handleActiveStatus = (event) =>{
    setNumber(event.target.innerText);
    // console.log(num);
    setActiveState(false);

  }
  
  return (
    <div className='card1'>
      <Star/>
      <div className='title'>How did we do?</div>
      <p>Please let us know, how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='keys'>
        {nums.map(number =>{
          return(
            <Bubble className="bubble" key={number.id} value={number.val} onClick={handleActiveStatus} data={numbers}/>
          )
        })}
      </div>
      <Link  to="thankyou/"><Button disabled={activeState} title="SUBMIT"/></Link>
    </div>
  )
}

export default ActiveState