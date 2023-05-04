import React from 'react'

const Bubble = ({ className, num, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <span>{num}</span>
    </div>
  )
}

export default Bubble