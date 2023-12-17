import React from 'react'

const Box = ({id, count, color, avatar, owner, size=50}) => {
  return (
    <div 
      style={{
        width:`${size}px`,
        height: `${size}px`
      }}
      clasName="relative" 
      id = "box-${i}" 
    ></div>
  )
}

export default Box