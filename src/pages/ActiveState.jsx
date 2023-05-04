import React from 'react'
import Star from '../components/star' 
import Bubble from '../components/resuable/Bubble'
import Button from '../components/Button'

const ActiveState = () => {
  const nums = [
    {id:1, val:"1"},
    {id:2, val:"2"},
    {id:3, val:"3"},
    {id:4, val:"4"},
    {id:5, val:"5"} 
  ]
  return (
    <div className='card'>
      <Star/>
      <div className='title'>How did we do?</div>
      <p>Please let us know, how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='keys'>
        {nums.map(number =>{
          return(
            <Bubble key={number.id} num={number.val}/>
          )
        })}
      </div>
      <Button title="SUBMIT"/>
    </div>
  )
}

export default ActiveState