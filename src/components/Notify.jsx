import React from 'react'
import { useLocation } from 'react-router-dom';

const Notify = ({num}) => {
  return (
    <span className='notify'>You selected {num} out of 5</span>
  )
}

export default Notify