import React, { useState } from 'react'
import Star from '../components/star' 
import Bubble from '../components/resuable/Bubble'
import Button from '../components/Button'
import { Link, useNavigate, useNavigation } from "react-router-dom";

const ActiveState = ({nums}) => {
  const [activeState, setActiveState] = useState(true); 
  const [numbers, setNumber] = useState(null);

  const navigate = useNavigate()
  
  const handleActiveStatus = (e, rating) =>{
    setNumber(rating);
    console.log(rating);
    setActiveState(false);
  }

  const onClickHHandler = () => {
    navigate("thankyou/", {state: {rating: numbers}})
  } 
  
  return (
    <div className='card1'>
      <Star/>
      <div className='title'>How did we do?</div>
      <p>Please let us know, how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='keys'>
        {nums.map((number) =>{
          return(
            <Bubble className={`bubble ${number.id == numbers ? "bubble-active" : ""}`} key={number.id} value={number.val} onClick={handleActiveStatus} data={numbers}/>
          )
        })}
      </div>
        <Button disabled={activeState} title="SUBMIT" onClick={onClickHHandler} />
    </div>
  )
}

export default ActiveState