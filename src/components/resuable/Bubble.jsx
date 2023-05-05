import React from 'react'

const Bubble = ({ className, value, onClick}) => {
  return (
    <div className={className} onClick={() => onClick(value)}>
      <span>{value}</span>
    </div>
  )
}

export default Bubble