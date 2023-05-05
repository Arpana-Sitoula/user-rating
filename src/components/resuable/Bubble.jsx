import React from 'react'

const Bubble = ({ className, value, onClick}) => {
  return (
    <div className={className} onClick={(e) => onClick(e, value)}>
      <span>{value}</span>
    </div>
  )
}

export default Bubble