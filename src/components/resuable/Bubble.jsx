import React from 'react'

const Bubble = ({ className, value, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <span>{value}</span>
    </div>
  )
}

export default Bubble